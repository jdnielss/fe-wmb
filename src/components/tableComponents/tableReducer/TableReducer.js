const dataTable = {
    fetchResult: [],
    tableFormData: {
        numberTable: null,
        status: '',
        capacity: null
    }
}


export function addTable(state = dataTable, action) {
    switch (action.type) {
        case 'FETCHING_SUCCESS':
            return {
                ...state.fetchResult, fetchResult: action.payload
            }
        case 'HANDLE_NO_TABLE':
            return {
                ...state, tableFormData: {...state.tableFormData, numberTable: action.payload}
            }
        case 'HANDLE_CAPACITY_TABLE':
            return {
                ...state,tableFormData: {...state.tableFormData,capacity: action.payload}
            }
        case 'HANDLE_STATUS_TABLE':
            return {
                ...state,tableFormData: {...state.tableFormData,status: action.payload}
            }
        default:
            return {...state};
    }
}