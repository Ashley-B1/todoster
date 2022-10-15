import {  legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
