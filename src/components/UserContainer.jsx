import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    FlatList,
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
                <FlatList data={users} renderItem={({user}) => <UserCard name={user.name} email={user.email}/>} keyExtractor={(user) =>  user.id}/>
            {/* <ScrollView style={styles.scrollView}>
                <Text>A</Text>
                <Text>b</Text>
                {
                    

                    users.map((user) => {
                        return (
                            <UserCard key={user.id} user={user} />
                        )
                    })

                }
            </ScrollView> */}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        width: '100%',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'transparent',
        width: '100%',

        paddingHorizontal: 20,
    },
    title: {
        color: '#777',
        fontWeight: '700',
        fontSize: 30,
        paddingTop: 30,
    }
});
