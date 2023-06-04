import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import wordcloudReducer from './slices/wordcloudbutton'
import startendReducer from './slices/startenddate';
import bigcateReducer from './slices/bigcatebutton'

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
  wordcloudbutton : wordcloudReducer,
  startenddate : startendReducer,
  bigcatebutton : bigcateReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
