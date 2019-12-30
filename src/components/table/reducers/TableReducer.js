  const dataTable = {
    fetchResult: [
        {content: [],
            total: null,
            per_page: null,
            current_page: 0
        }
    ],
    tableFormData: {
        idTable: '',
        numberTable: null,
        status: 'AVAILABLE',
        capacity: null
    },
    fetchTableById: {
        numberTable:'',
    },
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
        case 'RESET':
                return {
                    ...state, tableFormData: {id:'', numberTable: '', status: '', capacity:''}
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
        case 'HANDLE_UPDATE_NO_TABLE':
            return {
                ...state, fetchTableById: {...state.fetchTableById, numberTable: action.payload}
            }
        case 'HANDLE_UPDATE_CAPACITY_TABLE':
            return {
                ...state, fetchTableById: {...state.fetchTableById, capacity: action.payload}
            }
        default:
            return {...state};
    }
}