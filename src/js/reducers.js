import { combineReducers } from 'redux';
import detailReducer from './containers/detail/movieDetailReducer';
import serachReducer from './containers/search/movieSearchReducer';

const rootReducer = combineReducers({
    detail: detailReducer,
    search: serachReducer
})

export default rootReducer;