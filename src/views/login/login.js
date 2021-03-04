// import dello User Service
import UserService from '../../Services/UserService.js';

// DIchiarazione del nome del componente e delle variabili
export default {
    name: 'Login',
    data() {
        return {
            errore: null,
            loading: false,
            errors: [],
            isUser: false,
            isPw: false,
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        // Metodo di reindirizzamento alla pagina di home
        home() {
            this.$router.replace({ name: "home" })
        },
        // Metodo di login
        login() {

            // Reset delle variabili degli errori
            this.errors = [];
            this.isUser = false;
            this.isPw = false;


            // Controllo degli errori
            if (!this.input.username) {
                this.errors.push('Lo username è obbligatorio');
                this.isUser = true;
            }
            else if (!this.validEmail(this.input.username)) {
                this.errors.push("L'email inserita non è valida");
                this.isUser = true;
            }
            if (!this.input.password) {
                this.errors.push('La password è obbligatoria');
                this.isPw = true;
            }

            if(this.errors == []){ 
                console.log(this.errors);
            }

            // Richiamo del metodo di login dal file UserService con reindirizzamento alla home e visualizzazione errori
            if (this.input.username && this.input.password) {
                this.loading = true;
                UserService.login(this.input.username, this.input.password)
                    .then(data => {
                        this.$set(this, "event", data);
                        this.loading = false;
                        this.$router.replace({ name: "home" });
                    })
                    .catch(error => {
                        console.log(error);
                        this.errors.push(error.response.data.message);
                        this.isUser = true;
                        this.isPw = true;
                        this.loading = false;
                    })
            }
        },
        // Metodo di validazione dell'email
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        // Metodo di reindirizzamento alla pagina di recupero password
        recover() {
            this.$router.replace({ name: "recover" });
        }
    }
}