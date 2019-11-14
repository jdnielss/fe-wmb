const dataTable = {
    fetchResult: [],
    tableFormData: {
        numberTable: null,
        status: 'AVAILABLE',
        capacity: null
    },
    fetchTableById: {},
    paymentDataByTable: {
        orderList: {
            picCustomer: '',
            orderDetails: []
        },
        tableEntities:''
    }
}

export default function tableReducer(state = dataTable, action) {
    switch (action.type) {
        case 'FETCHING_TABLE_SUCCESS':
            return {
                ...state, fetchResult: action.payload
            }
        case 'FETCHING_TABLE_BY_ID':
            return {
                ...state,
                fetchTableById: action.payload
            }
        case 'FETCHING_DATA_BY_TABLE_ID':
            return {
                ...state,
                paymentDataByTable: action.payload
            }
        case 'HANDLE_NO_TABLE':
            return {
                ...state, tableFormData: {...state.tableFormData, numberTable: action.payload}
            }
        case 'HANDLE_CAPACITY_TABLE':
            return {
                ...state, tableFormData: {...state.tableFormData, capacity: action.payload}
            }
        case 'HANDLE_STATUS_TABLE':
            return {
                ...state, tableFormData: {...state.tableFormData, status: action.payload}
            }
        default:
            return {...state};
    }
}