export async function fetchDataMenu(){
    const data = await fetch('http://10.10.13.150:9090/food', {method:'GET',})
        .then((response) => {
            console.log(response)
            return response.json()
        })
    console.log(data)
    return data;
}
export async function saveDataMenu(dataMenu) {
    return await fetch('http://10.10.13.150:9090/food', {
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