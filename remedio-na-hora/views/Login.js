import { Text, View, StyleSheet, SafeAreaView, StatusBar, TextInput, ActivityIndicator, Button } from "react-native";
import UserController from '../api/userController';
import { useState } from 'react';

const Login = ({ navigation }) => {

    const [isLoading, setLoading] = useState(false)
    const [login, setLogin] = useState('');
    const [passwd, setPasswd] = useState('');

    var controller = new UserController();

    const authUser = async () => {
        try {
            setLoading(true)
            credentials = controller.authUser(login, passwd);
            if (credentials != null) {
                navigation.navigate('Cadastro');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            {isLoading
                ? <ActivityIndicator />
                : <View>
                    <Text>Login</Text>
                    <TextInput style={styles.input} placeholder="Infome seu E-mail" value={login} onChangeText={(value) => { setLogin(value) }}></TextInput>
                    <Text>Senha</Text>
                    <TextInput style={styles.input} placeholder="Infome sua Senha" secureTextEntry={true} value={passwd} onChangeText={(value) => { setPasswd(value) }}></TextInput>
                    <Button title="Login" onPress={authUser}></Button>
                    <StatusBar style='auto' />
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        padding: 10,
        margin: 10,
        borderolor: 'black',
        borderWidth: 1,
        width: '80%',
    }
});

export { Login }