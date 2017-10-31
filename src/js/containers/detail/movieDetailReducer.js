const initialState = {
    title: '',
    year: '',
    rated: '',
    released: '',
    runtime: '',
    genre: '',
    director: '',
    writer: '',
    actors: '',
    plot: '',
    language: '',
    awards: '',
    poster: '',
    metascore: [],
    imbdRating: '',
    imbdId: '',
    totalSeasons: '',
    loading: false
}

export default function detailReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_DETAILS_FULFILLED':
            return {
                ...state,
                title: payload.Title,
                year: payload.Year,
                rated: payload.Rated,
                released: payload.Released,
                runtime: payload.Runtime,
                genre: payload.Genre,
                director: payload.Director,
                writer: payload.Writer,
                actors: payload.Actors,
                plot: payload.Plot,
                language: payload.Language,
                awards: payload.Awards,
                poster: payload.Poster,
                metascore: payload.Ratings,
                imbdRating: payload.imbdRating,
                imbdId: payload.imbdID,
                totalSeasons: payload.totalSeasons,
                loading: false
            }

            case 'GET_DETAILS_PENDING':
                return {
                    ...state,
                    loading: true
                }

        default:
            return state;
    }
}