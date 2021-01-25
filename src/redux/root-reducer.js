import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Selecting Local Storage to persist our redux data
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
