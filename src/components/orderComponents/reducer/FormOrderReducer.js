const initialDAta = {
    dataMenu: [],
    formOrder: {
        picCustomer: '',
        manyCustomers: null,
        idTable: '',
        orderDetails: []
    }
};


export default function formOrderReducer(state = initialDAta, action) {
    switch (action.type) {
        case 'FETCH_DATA_MENU':
            return {
                ...state, dataMenu: action.payload
            }
        case 'HANDLE_PIC_CUSTOMER':
            return {
                ...state, formOrder: {...state.formOrder, picCustomer: action.payload}
            }
        case'HANDLE_MANY_CUSTOMERS':
            return {
                ...state, formOrder: {...state.formOrder, manyCustomers: action.payload}
            }
        case 'HANDLE_ID_TABLE':
            return {
                ...state, formOrder: {...state.formOrder, idTable: action.payload}
            }
        case 'ADD_ORDER_MENU':
            return {
                ...state, formOrder: {
                    ...state.formOrder,
                    orderDetails: state.formOrder.orderDetails.concat([{foodId: '', quantity: null}])
                }
            }
        case 'HANDLE_FOOD_ID':
            return {
                ...state, formOrder: {
                    ...state.formOrder, orderDetails: state.formOrder.orderDetails.map((element, index) => {
                        if (index === action.index) {
                            return {...element,foodId:action.payload}
                        } else {
                            return {...element}
                        }
                    })
                }
            }
        case 'HANDLE_FOOD_QUANTITY':
            return {
                ...state, formOrder: {
                    ...state.formOrder, orderDetails: state.formOrder.orderDetails.map((element, index) => {
                        if (index === action.index) {
                            return {...element, quantity: action.payload}
                        } else {
                            return {...element}
                        }
                    })
                }
            }
        default:
            return {...state}
    }

}