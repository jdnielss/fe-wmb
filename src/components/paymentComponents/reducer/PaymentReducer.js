const initialState = {
    fetchResultTransaction: [],
    fetchResultTransactionById: {
        idTransaction: '',
        total: null,
        paymentMethod: '',
        pay: null,
        paymentStatus: '',
        orderList: {
            orderDetails: [],
        }
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
                    pay: action.payload.pay,
                    paymentStatus: action.payload.paymentStatus,
                    orderList: action.payload.orderList
                }
            }
        case 'HANDLE_PAYMENT':
            return {
                ...state, fetchResultTransactionById: {...state.fetchResultTransactionById, pay: action.payload}
            }
        default:
            return {
                ...state
            }
    }
}