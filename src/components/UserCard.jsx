import { StyleSheet, View, Text, } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'

export default function UserCard({ name, email }) {
    return (
        <View style={styles.userContainer}>
            <ListItem style={[styles.extended]}>
                <Icon name='person' color={"#888"}/>
                <Text style={[styles.extended, styles.name]}>{name}</Text>
            </ListItem>
            <ListItem style={[styles.extended]}>
                <Icon name='mail' color={"#9995"} />
                <Text style={[styles.extended, styles.email]}>{email}</Text>
            </ListItem >
        </View>
    )
}

const styles = StyleSheet.create({

    userContainer: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        heigh: 100,
        marginVertical: 10,
        backgroundColor: '#9991',
        borderRadius: 15,
        padding: 5,
        

    },
    name: {
        color: '#f07',
        fontWeight: '700',

    },
    first: {
        borderRadius: 15,
    },
    last: {
        borderRadius: 15,
    },
    email: {
        color: '#9997',
        fontWeight: '200',
        fontSize: 14,
    },
    extended: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        width: '100%',
    }
});