const initialState = {
    fetchResultTransaction: [],
    fetchResultTransactionById: {
        idTransaction: '',
        total: null,
        paymentMethod: '',
        change: 0,
        pay: null,
        paymentStatus: '',
        orderList:{}
    }

}

export default function paymentReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCHING_TRANSACTION_SUCCESS':
            return {
                ...state, fetchResultTransaction: action.payload
            }
        case 'FETCHING_TRANSACTION_BY_ID_SUCCESS':
            return {
                ...state, fetchResultTransactionById: {
                    ...state.fetchResultTransactionById,
                    idTransaction: action.payload.idTransaction,
                    total: action.payload.total,
                    paymentMethod: action.payload.paymentMethod,
                    change: action.payload.change,
                    pay: action.payload.pay,
                    paymentStatus: action.payload.paymentStatus,
                    orderList:action.payload.orderList
                }
            }
        case 'HANDLE_PAYMENT':
            return {
                ...state, fetchResultTransactionById: {...state.fetchResultTransactionById, pay:action.payload}
            }
        default:
            return {
                ...state
            }
    }
}