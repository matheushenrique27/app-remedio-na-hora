import { useState } from "react";
import { Text, Button, SafeAreaView, TextInput, View, ActivityIndicator } from "react-native";
import UserController from '../api/userController';


const Cadastro = ({ navigation }) => {

    const [login, setLogin] = useState('');
    const [passwd, setPasswd] = useState('');
    const [cpf, setCpf] = useState('');

    var controller = new UserController();

    const cadastro = async () => {
        try {
            setLoading(true)
            credentials = controller.cadastrorUser(login, passwd, cpf);
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
        <SafeAreaView>
            {isLoading
                ? <ActivityIndicator />
                : <View>
                    <Text>Nome</Text>
                    <TextInput placeholder="Informe seu E-mail" value={login} onChangeText={(value) => { setLogin(value) }}></TextInput>
                    <Text>Senha</Text>
                    <TextInput placeholder="Informe sua Senha" value={passwd} onChangeText={(value) => { setPasswd(value) }}></TextInput>
                    <Text>CPF</Text>
                    <TextInput placeholder="Informe seu CPF" value={cpf} onChangeText={(value) => { setCpf(value) }}></TextInput>
                    <Button title="Cadastrar" onProgress={cadastro}></Button>
                </View>
            }
        </SafeAreaView>
    )
}

export { Cadastro }