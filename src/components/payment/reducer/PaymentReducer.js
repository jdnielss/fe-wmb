const initialState = {
    fetchResult:[],
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
                ...state, fetchResultTransaction: {...state.fetchResultTransaction, content: action.payload.content, total: action.payload.totalElements, per_page: action.payload.size, current_page: action.payload.number}
            }
        case 'RESET_PAYMENT':
            return {
                ...state, fetchResultTransaction: { idTransaction: '', total: null, pay: null,}
            }
        case 'FETCHING_SUCCESS':
            return {
                ...state, fetchResult: action.payload
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