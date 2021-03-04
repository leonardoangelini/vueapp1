export default{
    name: 'noAuth',
    methods: {
        goLogin(){
            this.$router.replace({ name: 'login' });
        },
        goRegister(){
            this.$router.replace({ name: 'register' });
        }
    }
}