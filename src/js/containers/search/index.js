import { connect } from 'react-redux';
import Search from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
      movies: store.search.movies,
      loading: store.search.loading
  }
}

export default connect(mapStoreToProps)(Search);