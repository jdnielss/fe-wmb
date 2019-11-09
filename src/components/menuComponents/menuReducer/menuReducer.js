const dataMenu = {
    fetchResultMenu: [],
    menuForm: {
        foodName: '',
        typeFood: '',
        price: '',
        quantity: '',
        imageFile: ''
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
                ...state,
                menuForm: {
                    ...state, foodName: action.payload
                }
            }
        case 'HANDLE_TYPE_FOOD':
            return {
                ...state,
                menuForm: {
                    ...state, typeFood: action.payload
                }
            }
        case 'HANDLE_PRICE_FOOD':
            return {
                ...state,
                menuForm: {
                    ...state, price: action.payload
                }
            }
        case 'HANDLE_QUANTITY_FOOD':
            return {
                ...state,
                menuForm: {
                    ...state, quantity: action.payload
                }
            }
        case 'HANDLE_UPLOAD_IMAGE':
            return {
                ...state,
                menuForm: {
                    ...state, imageFile: action.payload
                }
            }
    }
    return {...state}
}
