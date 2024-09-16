import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../Firebase";
import { collection, onSnapshot, deleteDoc, doc, querySnapshot } from "firebase/firestore";

export default function Home({ navigation }) {

    const [criptos, setcriptos] = useState([]);

    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestore, "tbmoeda", id))
            Alert.alert("A criptomoeda foi deletada.")
        } catch (erro) {
            console.error("Erro ao deletar.", error)
        }
    }

    useEffect(() => {
        const unsubcribe = onSnapshot(collection(firestore, 'tbmoeda'), (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ ...doc.data(), id: doc.id });
            });
            setcriptos(lista);
        });
        return () => unsubcribe();
    }, []);

    return (
        <View>
            <View>
                <Text style={estilo.titulo}>Lista de criptomoedas</Text>
            </View>
            <FlatList
                data={criptos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("AlterarCriptos", {
                                id: item.id,
                                nomeCripto: item.nomeCripto,
                                siglaCripto: item.siglaCripto,
                                valorCripto: item.valorCripto
                            })}>
                                <View>
                                    <Text>Criptomoeda: <Text>{item.nomeCripto}</Text></Text>
                                    <Text>Sigla: <Text>{item.siglaCripto}</Text></Text>
                                    <Text>Valor: <Text>{item.valorCripto}</Text></Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => { deleteCripto(item.id) }}>
                                    <Text>X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
            <TouchableOpacity onPress={()=>navigation.navigate("CadastrarCriptos")}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
}



