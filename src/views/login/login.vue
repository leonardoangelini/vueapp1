<template>
    <form id="login" autocomplete="off">
        <h1>Login</h1>

        <!-- Visualizzazione degli alert con gli errori -->
        <transition name="fadeHeight" mode="out-in">
            <div class="alert alert-danger" role="alert" v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
        </transition>

        <!-- Form con input di email password e bottone di recupero password e submit -->
        <div class="form-floating">
            <input class="form-control" type="text" id="floatingInputUser" name="username" v-model="input.username"
                v-bind:class="{'is-invalid': isUser}" placeholder="Username" />
            <label for="floatingInputUser">Username</label>
        </div>
        <div class="form-floating">
            <input class="form-control" id="floatingInputPw" type="password" name="password" v-model="input.password"
                v-bind:class="{'is-invalid': isPw}" placeholder="Password" />
            <label for="floatingInputPw">Password</label>
        </div>
        <div class="forgot" v-on:click="recover()">
            <span>Hai dimenticato la password?</span>
        </div>
        <br><br>
        <button type="button" class="btn btn-primary" v-on:click="login()">
            <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
            Login
        </button>
    </form>
</template>

<!-- Import dello script -->
<script>
import login from './login.js';
export default login;
</script>
