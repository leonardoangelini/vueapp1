<!-- Creazione del template -->
<template>
    <div class="home">
        <!-- Visualizzazione spiner di caricamento al mount della pagina -->
        <div class="container" v-if="loading === true">
            <div class="spinner-border text-primary m-5" style="width: 3.2rem; height: 3.2rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        
        <!-- Tabella con informazioni della singola prenotazione -->
        <div class="container" v-if="loading === false">
            <table width="100%">
                <tbody class="infoTable">
                    <tr>
                        <td>
                            <strong>Id prenotazione:</strong> {{id}}
                        </td>
                        <td>
                            <strong>Data:</strong> {{booking.bookingDate | formatDate}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Data di creazione:</strong> {{booking.created | formatDate}}
                        </td>
                        <td>
                            <strong>Codice:</strong> {{booking.code}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Durata:</strong> {{booking.duration}} minuti
                        </td>
                        <td>
                            <strong>Giocatori:</strong> {{booking.players}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Campo</strong>
                            <button class="show float-end" v-if="show === false" v-on:click="showInfo()">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/></svg>
                            </button>
                            <button class="show float-end" v-if="show === true" v-on:click="comprimi()">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"/></svg>
                            </button>
                            <!-- Lista delle informazioni del campo -->
                            <ul v-if="show === true">
                                <li v-for="(elem, i) in booking.court" :key="i">
                                    <strong>{{i}}:</strong> {{elem}}
                                </li>
                            </ul>
                        </td>
                        <td>
                            <strong>Prezzo</strong>
                            <button class="show float-end" v-if="showP === false" v-on:click="showPrice()">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z"/></svg>
                            </button>
                            <button class="show float-end" v-if="showP === true" v-on:click="comprimi()">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z"/></svg>
                            </button>
                            <!-- Lista delle informazioni del prezzo -->
                            <ul v-if="showP === true">
                                <li v-for="(item, a) in booking.bookingPrices[0]" :key="a">
                                    <strong>{{a}}:</strong> {{item}}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>

<!-- Import del file booking.js -->
<script>
import booking from './booking.js';
export default booking;
</script>