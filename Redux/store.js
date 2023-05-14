import {legacy_createStore as createStore} from 'redux'
import {data_reducer} from './Reducer'


const store=createStore(data_reducer)

export default store