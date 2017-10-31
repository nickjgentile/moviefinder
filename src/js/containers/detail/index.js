import { connect } from 'react-redux';
import Detail from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    title: store.detail.title,
    year: store.detail.year,
    rated: store.detail.rated,
    released: store.detail.released,
    runtime: store.detail.runtime,
    genre: store.detail.genre,
    director: store.detail.director,
    writer: store.detail.writer,
    actors: store.detail.actors,
    plot: store.detail.plot,
    language: store.detail.language,
    awards: store.detail.awards,
    poster: store.detail.poster,
    metascore: store.detail.metascore,
    imbdRating: store.detail.imbdRating,
    imbdId: store.detail.imbdId,
    totalSeasons: store.detail.totalSeasons,
    loading: store.detail.loading
  }
}

export default connect(mapStoreToProps)(Detail);