import { db } from "./Firebase";

class UserController {

    cadastrorUser = async (login, passwd, cpf) => {
        try {
            const user = db.firestore().collectoin('user');
            const data = {
                email: login,
                cpf: cpf,
                passwd: passwd
            };
            user
                .add(data)
                .catch((error)=>{
                    alert(error);
                });
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