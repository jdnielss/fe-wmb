const dataOrder = {
    dataFetchOrder:[],
    tableAvailable: [],
    dataMenu: [],
    formOrder: {
        picCustomer: '',
        manyCustomers: null,
        idTable:'',
        orderDetails:[]
    }
}


export function addOrder(state=dataOrder, action) {
    switch (action.type) {
        case 'FETCH_ORDER_SUCCES':
            return{
                ...state, dataFetchOrder: action.payload
            }
        case 'FETCH_TABLE_AVAILABLE':
            return {
                ...state, tableAvailable: action.payload
            }
        case 'FETCH_DATA_MENU':
            return {
                ...state, dataMenu: action.payload
            }
        case 'HANDLE_PIC_CUSTOMER':
            return {
                ...state
            }
    }

}