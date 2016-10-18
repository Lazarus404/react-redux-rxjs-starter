import { combineEpics } from 'redux-observable';
import clearSearchResults from './clearSearchResults';

export default combineEpics(
  clearSearchResults
);