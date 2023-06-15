import { Component } from "react";
import { firebase } from "./Firebase";

class UserController {

    cadastrorUser = async (login, passwd, cpf) => {
        try {
            const uri = ''
            const response = await fetch(uri, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + route.params.credentials.token,

                },
                body: JSON.stringify({
                    email: login,
                    cpf: cpf,
                    passwd: passwd
                })
            });
            console.log(response.status);
            const newClient = await response.json();
            console.log(newClient);
        } catch (error) {
            console.error(error);
        }
    }

    authUser = async (login, passwd) => {

        try {

            const uri = ''
            const response = await fetch(uri, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    senha: passwd
                })
            });
            console.log("User Autenticado: ")
            console.log(response.status);
            if (response.status == 200) {
                const credentials = await response.json();
                console.log(credentials);
                return credentials;
            } else {
                return null;
            }

        } catch (error) {
            console.error(error);
        }

    }
}

export default UserController;