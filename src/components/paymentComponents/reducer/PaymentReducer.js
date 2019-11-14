const initialState = {
        fetchResultTransaction: {
            content: [],
            total: null,
            per_page: null,
            current_page: 0
        },
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
                ...state, fetchResultTransaction: {...state, fetchResultTransaction: action.payload.content, total: action.payload.total, per_page: action.payload.per_page, current_page: action.payload.current_page}
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