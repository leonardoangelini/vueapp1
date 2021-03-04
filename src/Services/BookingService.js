// Import di axios
import axios from 'axios';

export default {
    // Dichiarazione del metodo asincrono getBoking
    // che prende come parametri page (che indica la pagina corrente) e pageSize(il numero di elementi in una pagina)
    // viene effettuata la chiamata all'api e vengono passati il bearer token e i parametri
    async getBooking(page, pageSize) {
        let token = localStorage.getItem("token");
        const config = {
            headers: {Authorization: `Bearer ${token}`},
            params: {page: page, pageSize: pageSize}
        };
        let res = await axios.get('https://paddle.kube.cobaltica.net/api/Booking', config);
        return res;
    },

    // Dichiarazione del metodo asincrono bookingDetails usato per visualizzare i dettagli di un singolo record
    async bookingDetail(bookingId){
        let token = localStorage.getItem("token");
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };
        let res = await axios.get('https://paddle.kube.cobaltica.net/api/Booking/' + bookingId, config);
        return res.data;
    },

    //Dichiarazione del metodo newBooking per la creazione di un nuovo oggetto
    async newBooking(players, start, end, options, courtId){
        var obj = {
            players: players,
            start: start,
            end: end,
            options: options,
            courtId: courtId
        }
        let token = localStorage.getItem("token");
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };
        let res = await axios.post('https://paddle.kube.cobaltica.net/api/Booking/', obj, config);
        return res.data;
    }
}