import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Selecting Local Storage to persist our redux data
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    blank: (state, action) => (state == null ? (state = []) : state),
});

export default persistReducer(persistConfig, rootReducer);
