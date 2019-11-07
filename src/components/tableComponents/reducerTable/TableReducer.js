const dataTable = {
    fetchResult: [],
    table: []
}


export function addTable (state=dataTable, action) {
    switch (action.type) {
        case 'FETCHING_SUCCESS':
            return{
                ...state.fetchResult, fetchResult: action.payload
            }
        case 'ADD_NEW_TABLE':
                return {
                    ...state,
                table: state.table.concat([0])
                }
        case 'HANDLE_NO_TABLE':
            return {
                ...state
            }
        case 'HANDLE_CAPACITY_TABLE':
            return {
                ...state
            }
        case 'HANDLE_STATUS_TABLE':
            return {
                ...state
            }
        default:
            return state;
    }
}