import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/constructorReducer'

const loggerMiddleware = createLogger();

const createStroeWithMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware)(createStore);

export default function configureStore(initialState) {
	console.log('createStore');
	return createStroeWithMiddleware(rootReducer,initialState);
}