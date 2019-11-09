import {combineReducers} from "redux";
import addTable from '../tableComponents/tableReducer/TableReducer'
import addMenu from '../menuComponents/menuReducer/menuReducer'

export default combineReducers({
    addTable,
    addMenu
})