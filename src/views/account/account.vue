<!-- Creazione template della pagina con i dati dell'utente -->
<template>
    <div class="account-page">
        <h1>Gestione account di {{username}}</h1>
        <button class="btn btn-primary goBack" v-on:click="indietro()">Indietro</button>
        <br><hr>
        <div class="user-data">
            <ul class="left">
                <li v-for="titoli in title" :key="titoli">{{titoli}}: </li>
            </ul>
            <ul class="right">
                <li v-for="dati in user" :key="dati"> {{dati}}</li>
            </ul>
        </div>
    </div>
</template>

<!-- Import del file account.js -->
<script>
import account from './account.js';
export default account;
</script>