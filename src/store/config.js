import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'raven_tickets',
    storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const saver = store => next => action => {
    let result = next(action);
    let stateToSave = store.getState();
    AsyncStorage.setItem("raven_tickets", JSON.stringify(stateToSave));
    return result;
}
const logger = store => next => action => {
    let result;
    result = next(action);
    return result;
}
const ConfigureStore = () => {
    const middleWares = [
        thunk, saver, logger
    ];
    var store = createStore(persistedReducer,
        compose(applyMiddleware(...middleWares)));
    var persistor = persistStore(store);
    return {
        store, persistor
    }
}

export default ConfigureStore();