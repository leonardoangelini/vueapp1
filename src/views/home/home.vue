<!-- definizione del template -->
<template>
    <div class="home">
        <div class="container" v-if="loading === true">
            <div class="spinner-border text-primary m-5" style="width: 3.2rem; height: 3.2rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="container" v-if="loading === false">

            <!-- creazione della tabella per mostrare le prenotazioni -->
            <table class="table">
                <thead>
                    <tr>
                        <td>
                            Booking Id
                        </td>
                    <td>
                        Codice Prenotazione
                    </td>
                    <td>
                        Data
                    </td>
                    <td>
                    </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.data.data" :key="item.bookingId">
                        <td>
                            {{item.bookingId}} 
                        </td>
                        <td>
                            {{item.code}}
                        </td>
                        <td>
                            {{item.bookingDate | formatDate}}
                        </td>
                        <td>
                            <router-link :to="{name: 'booking', params: {id: item.bookingId} }">
                                <button class="btn btn-outline-primary btn-details">Dettagli</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- creazione del paginatore -->
        <nav class="pagination-text" aria-label="Page navigation example">
            <span class="text-primary" style="font-weight:700;">Pagina {{currentPage}}
                <div class="spinner-border text-primary" role="status" v-if="loading === true">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </span>

            <!-- definizione degli elementi per mostrare la pagina corrente e di quelli per cambiare pagina -->
            <ul class="pagination justify-content-center">
                <li class="page-item" v-bind:class="{'disabled': disabledTop}">
                    <a class="page-link" aria-label="First" v-on:click="first()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledTop}">
                    <a class="page-link" aria-label="Previous" v-on:click="previous()">
                        <span aria-hidden="true">&lt;</span>
                    </a>
                </li>
                <li class="page-item" v-for="pages in pageCount" :key="pages">
                    <a class="page-link" v-if="pages !== data.currentPage" v-on:click="change(pages)">{{pages}}</a>
                    <span class="page-link deactivated" v-if="pages === data.currentPage">{{pages}}</span>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledBottom}">
                    <a class="page-link" aria-label="Next" v-on:click="next()">
                        <span aria-hidden="true">&gt;</span>
                    </a>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledBottom}">
                    <a class="page-link" aria-label="Last" v-on:click="last()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import home from './home.js';
export default home;
</script>