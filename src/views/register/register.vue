<template>
    <form id="register" autocomplete="off">

        <h1>Registrati</h1>
        
        

        <div class="form-floating">
            <input class="form-control" type="text" name="firstname" v-model="input.firstName" v-bind:class="{'is-invalid': errClass.isFn}" placeholder="Nome" />
            <label for="floatingInputPw">Nome</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="text" name="lastName" v-model="input.lastName" v-bind:class="{'is-invalid': errClass.isLn}" placeholder="Cognome" />
            <label for="floatingInputPw">Cognome</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="email" name="email" v-model="input.email" v-bind:class="{'is-invalid': errClass.isMail}" placeholder="E-Mail" />
            <label for="floatingInputPw">Email</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="password" name="password" v-model="input.password" v-bind:class="{'is-invalid': errClass.isPw}" placeholder="Password" />
            <label for="floatingInputPw">Password</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="password" name="passwordconfirm" v-model="input.confpw" v-bind:class="{'is-invalid': errClass.isPw2}" placeholder="Conferma Password" />
            <label for="floatingInputPw">Conferma Password</label>
        </div>

        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" v-if="icon === true"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>  
          <span id="contr">La password deve essere contenere almeno 6 caratteri inclusi numeri</span>
        </div>

        <br><br>
        <button type="button" class="btn btn-primary register-btn" v-on:click="register()">
            <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
            Registrati</button>
    </form>
</template>

<script>
import register from './register.js';

export default register;
</script>