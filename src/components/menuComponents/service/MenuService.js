export async function fetchDataMenu(){
    const data = await fetch('http://10.10.13.150:9090/food', {method:'GET',})
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
    return await fetch('http://10.10.13.150:9090/updateFood', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(dataMenu)
    })
        .then((res) => {
            return res.json()
        }).catch(err => err);
}

export async function saveFoodWithImage(foodFormData, foodImage){
    foodFormData.price = foodFormData.price.replace(/\D+/g, '');
    const data = new FormData();
    let dataMenu = JSON.stringify(foodFormData)
    data.append('file', foodImage)
    data.append('foodFormData', dataMenu)

    fetch("http://10.10.13.150:9090/saveFood", {
        method: 'POST',
        body: data,
        mode: "no-cors",
    });
    return data ;
}