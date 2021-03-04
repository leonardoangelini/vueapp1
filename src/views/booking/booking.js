// Import del file BookinService
import BookingService from "../../Services/BookingService";

export default {

    // Dichiarazione del nome del componente e delle variabili
    name: 'booking',
    data() {
        return {
            loading: false,
            id: null,
            booking: [],
            show: false,
            showP: false,
            errors: []
        }
    },
    methods: {
        // Richiamo del metodo bookingDetail dal file BookingService con visualizzazione errori
        getBooking(){
            BookingService.bookingDetail(this.id)
                .then(data => {
                    this.$set(this, "event", data);
                    this.booking = data;
                    console.log('Booking Info: ');
                    console.log(this.booking);
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                    this.errors.push(error.response.data.message);
                })
        },
        // Metodi di visualizzazione delle liste dei prezzi e delle informazioni del campo
        showInfo(){
            this.show = true;

        },
        showPrice(){
            this.showP = true;
        },
        comprimi(){
            this.show = false;
            this.showP = false;
        }
    },
    // Inizio caricamento e richiamo del metodo getBooking al mounted della pagina
    mounted() {
        this.loading = true;
        this.getBooking();
    },
    // Assegnazione della variabile id all'id nel path dell'url del file router/index.js
    created(){
        this.id = this.$route.params.id;
    }
}