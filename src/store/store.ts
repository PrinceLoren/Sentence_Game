import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Reducer,
  Store,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper'

import { gameReducer, IInitial } from './counter/counterReducer'

export interface AppState {
  game: IInitial
}

const combinedReducers = combineReducers({ game: gameReducer })

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combinedReducers(state, action)
}

const initStore: MakeStore<Store<AppState>> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper<Store<AppState>>(initStore)
