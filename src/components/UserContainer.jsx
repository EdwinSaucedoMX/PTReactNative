import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';

import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';


export default function UserContainer() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            if (res !== null) {
                setUsers(res?.data);
            }

        })
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lista de Usuarios</Text>
            <ScrollView style={styles.scrollView}>
                {

                    users.map((user) => {
                        return (
                            <UserCard key={user.id} user={user}/>
                        )
                    })

                }
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        width: '90%',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        color: '#777',
        fontWeight: '700',
        fontSize: 30,
        paddingTop: 30,
    }
});
