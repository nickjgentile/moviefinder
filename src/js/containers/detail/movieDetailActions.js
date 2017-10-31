import axios from 'axios';

export default (id) => ({
    type: 'GET_DETAILS',
    payload: axios.get('https://www.omdbapi.com/?apikey=8730e0e&i=' + id)
    .then(response => console.log(response) || response.data)
})