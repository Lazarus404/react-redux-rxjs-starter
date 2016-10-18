import { clearSearchResults } from '../actions';

export default action$ =>
  action$.ofType("searched_users")
    .filter(action => !!!action.payload.query)
    .map(clearSearchResults);
