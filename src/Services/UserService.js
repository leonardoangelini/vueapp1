import axios from 'axios'
//definizione della login
export default {
    async login(email, password) {
        var obj = {
            email: email,
            password: password
        };
        //chiamata post contenente l'email e la password
        let res = await axios.post("https://paddle.kube.cobaltica.net/api/Users/login", obj);
        console.log(res);
        //salvataggio sul local storage del Token e dello user
        localStorage.setItem('token', res.headers['x-token']);
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data;
    },
    //definizione del logout
    logout() {
        localStorage.clear();
    },
    //definizione della registrazione
    async signUp(email, password, firstName, lastName) {
        var obj = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        //chiamata post per effettuare la registrazione contenente tutti i dati dell'utente
        let res = await axios.post("https://paddle.kube.cobaltica.net/api/Users/sign-up", obj);
        return res.data;
    }
}