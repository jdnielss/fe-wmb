const dataMenu = {
    fetchResultMenu: [],
    menuForm: {
        typeFood: '',
        price: null,
        quantity: null,
        foodName: ''
    },
    updateMenu: {
        foodName: '',
        idFood: '',
        typeFood: '',
        price: null,
        quantity: null,
    },
}


export default function addMenu(state = dataMenu, action) {
    switch (action.type) {
        case 'FETCHING_MENU_SUCCESS':
            return {
                ...state, fetchResultMenu: action.payload
            };
        case 'HANDLE_FOOD_NAME':
            return {
                ...state, menuForm: {
                    ...state.menuForm, foodName: action.payload
                }
            }
        case 'HANDLE_TYPE_FOOD':
            return {
                ...state, menuForm: {
                    ...state.menuForm, typeFood: action.payload
                }
            }
        case 'HANDLE_PRICE_FOOD':
            return {
                ...state, menuForm: {
                    ...state.menuForm, price: action.payload
                }
            }
        case 'HANDLE_QUANTITY_FOOD':
            return {
                ...state, menuForm: {
                    ...state.menuForm, quantity: action.payload
                }
            }
        //    UPDATE
        case 'HANDLER_ID':
            return {
                ...state, updateMenu: {...state, updateMenu: action.payload}
            }
        default:
            return {...state}
    }
}
