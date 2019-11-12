import {combineReducers} from "redux";
import addTable from '../tableComponents/tableReducer/TableReducer'
import addMenu from '../menuComponents/menuReducer/menuReducer'
import addOrder from '../orderComponents/orderReducer/OrderReducer'
import purchasingOrder from '../transactionComponents/transactionReducer/TransactionReducer'

export default combineReducers({
    addTable,
    addMenu,
    addOrder,
    purchasingOrder
})