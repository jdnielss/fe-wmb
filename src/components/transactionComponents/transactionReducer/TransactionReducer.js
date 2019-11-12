const initialState = {
    fetchResultTransaction: [],
    updateTransaction:{
    }
}

export default function purchasingOrder(state=initialState, action) {
    switch (action.type) {
        case 'FETCHING_TRANSACTION_SUCCESS':
            return{
                ...state, fetchResultTransaction: action.payload
            }
        case 'UPDATE_TRANSACTION':
            return {
                ...state, updateTransaction: {...state, updateTransaction: action.payload}
            }
        default:
            return {
                ...state
            }
    }
}