import { StyleSheet, View, Text } from 'react-native';

export default function UserCard({user}) {
    return (
        <View key={user.id} style={styles.userContainer}>
            <Text style={[styles.extended, styles.name]}>{user.name}</Text>
            <Text style={[styles.extended, styles.email]}>{user.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    userContainer: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        heigh: 100,
        marginTop: 15,
        backgroundColor: '#8883',
        borderRadius: 15,
        padding: 10,
    },
    name: {
        color: '#777',
    },
    email: {
        color: '#9998',
    },
    extended: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        width: '100%',
    }
});