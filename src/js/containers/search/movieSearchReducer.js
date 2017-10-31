const initialState = {
    movies: [],
    loading: false,
}

export default function searchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MOVIES_FULFILLED':
            return {
                ...state,
                loading: false,
                movies: [...payload.Search]
            }

        case 'GET_MOVIES_PENDING':
            return {
                ...state,
                loading: true
            }

        case 'GET_MOVIES_REJECTED':
            return {
                ...initialState,
                loading: false
            }

        default:
            return state;
    }
}