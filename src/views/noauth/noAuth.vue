<template>
    <div class="auth-error">
        <h1>ATTENZIONE!</h1>
        <br><hr><br>
        <h3>Stai cercando di accedere ad un'area protetta, effettua l'accesso o registrati per continuare</h3>
        <br><br>
        <div class="error-box">
            <button class="btn btn-primary err" v-on:click="goLogin()">Accedi</button>
            <button class="btn btn-secondary err" v-on:click="goRegister()">Registrati</button>
        </div>
    </div>
</template>

<script>
import noAuth from './noAuth.js';
export default noAuth;
</script>