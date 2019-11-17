import Swal from "sweetalert2";

export async function fetchDataMenu(){
    const data = await fetch('http://10.10.13.150:9090/foods', {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}
export async function getDataMenuById(idMenu){
    const data = await fetch(`http://10.10.13.150:9090/food/${idMenu}`, {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}
export async function updateMenu(dataMenu) {
    dataMenu.price = dataMenu.price.replace(/\D+/g, '');
    return await fetch('http://10.10.13.150:9090/food', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(dataMenu)
    })
        .then( async (res) => {
            let respond = await res.json();
            if (res.status === 200){
                await Swal.fire(
                    'Success!',
                    'Update Success!',
                    'success'
                )
            } else await Swal.fire(
                'Error!',
                ''+respond.message,
                'error'
            )
        }).catch();
}
export async function deleteMenu(idFood) {
    const data =  await fetch(`http://10.10.13.150:9090/food/${idFood}`, {
        method: 'DELETE'
    })
        .then( async (res) => {
            let respond = await res.json();
            if (respond.status === 200){
                await Swal.fire(
                    'Success!',
                    'Update Success!',
                    'success'
                )
            } else await Swal.fire(
                'Error!',
                'Cannot delete when menu already ordered',
                'error'
            )
        }).catch(reason => reason.data)
    return data;
}

export async function saveFoodWithImage(foodFormData, foodImage){
    foodFormData.price = foodFormData.price.replace(/\D+/g, '');
    const data = new FormData();
    let dataMenu = JSON.stringify(foodFormData)
    data.append('file', foodImage)
    data.append('foodFormData', dataMenu)
    fetch("http://10.10.13.150:9090/food", {
        method: 'POST',
        body: data,
        mode: "no-cors",
    });
    return data ;
}