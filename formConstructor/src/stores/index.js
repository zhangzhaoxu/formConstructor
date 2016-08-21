import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger();

const createStroeWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware)(createStore);

export default function configureStore(initialState) {
	return createStroeWithMiddleware(rootReducer,initialState);
}