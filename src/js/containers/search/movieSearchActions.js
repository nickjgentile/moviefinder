import axios from 'axios';

export default (search) => ({
    type: 'GET_MOVIES',
    payload: axios.get('http://www.omdbapi.com/?apikey=8730e0e&s=' + search)
    .then((response) =>  {
        if (response.data.Error) throw new Error('Invalid Search Query');
        return response.data
    })
})

