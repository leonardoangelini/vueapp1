<template>
    <div class="recover">
        <h1>Recupera la tua password</h1>
        <br>
        <br>
        <button class="btn btn-primary goBack" v-on:click="indietro()">Indietro</button>
    </div>
</template>


<script>
    import recover from './recover.js';

    export default recover;
</script>