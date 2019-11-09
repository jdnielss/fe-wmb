const dataMenu = {
    fetchResultMenu: [],
    menuFormData: {
        foodName: '',
        typeFood: '',
        price: '',
        quantity: ''
    }
}


export default function addMenu(state=dataMenu, action){
    switch (action.type) {
        case 'FETCHING_MENU_SUCCESS':
            return{
                ...state.fetchResultMenu, fetchResultMenu: action.payload
            }
        case 'HANDLE_FOOD_NAME':
            return {
                ...state, menuFormData: {
                    ...state.menuFormData, foodName: action.payload
                }
            }
        case 'HANDLE_TYPE_FOOD':
            return {
                ...state, menuFormData: {
                    ...state.menuFormData, typeFood: action.payload
                }
            }
        case 'HANDLE_PRICE_FOOD':
            return {
                ...state, menuFormData: {
                    ...state.menuFormData, price: action.payload
                }
            }
        case 'HANDLE_QUANTITY_FOOD':
            return {
                ...state, menuFormData: {
                    ...state.menuFormData, quantity: action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}
