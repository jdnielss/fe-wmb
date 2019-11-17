const dataMenu = {
    fetchResultMenu: [],
    menuForm: {
        typeFood: '',
        price: null,
        quantity: null,
        foodName: ''
    },
    dataMenuById: {
        idFood:'',
        typeFood: '',
        price: null,
        quantity: null,
        foodName: ''
    }
}


export default function menuReducer(state = dataMenu, action) {
    switch (action.type) {
        case 'FETCHING_MENU_SUCCESS':
            return {
                ...state,fetchResultMenu: action.payload
            };
        case 'RESET_MENU':
            return {
                ...state, menuForm: {id: '', typeFood:'', price:'', quantity:'', foodName: ''}
            }
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
        case 'HANDLER_FETCH_BY_ID':
            return {
                ...state, dataMenuById: {...action.payload}
            }
        case 'HANDLE_UPDATE_ID_FOOD':
            return {
                ...state, dataMenuById: {
                    ...state.dataMenuById, idFood: action.payload
                }
            }
            case 'HANDLE_UPDATE_FOOD_NAME':
            return {
                ...state, dataMenuById: {
                    ...state.dataMenuById, foodName: action.payload
                }
            }
        case 'HANDLE_UPDATE_TYPE_FOOD':
            return {
                ...state, dataMenuById: {
                    ...state.dataMenuById, typeFood: action.payload
                }
            }
        case 'HANDLE_UPDATE_PRICE_FOOD':
            return {
                ...state, dataMenuById: {
                    ...state.dataMenuById, price: action.payload
                }
            }
        case 'HANDLE_UPDATE_QUANTITY_FOOD':
            return {
                ...state, dataMenuById: {
                    ...state.dataMenuById, quantity: action.payload
                }
            }

        default:
            return {...state}
    }
}
