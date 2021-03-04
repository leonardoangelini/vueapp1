export default{
    name: "recover",
    data(){
        return{};
    },
    methods: {
        indietro(){
            this.$router.replace({ name: "login" });
        }
    }
}