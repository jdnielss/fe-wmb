const initialState = {
    fetchResultTransaction: []
}

export default function purchasingOrder(state=initialState, action) {
    switch (action.type) {
        case 'FETCHING_TRANSACTION_SUCCESS':
            return{
                ...state.fetchResultTransaction, fetchResultTransaction: action.payload
            }
        default:
            return {
                ...state
            }
    }
}