export async function fetchDataMenu(){
    const data = await fetch('http://localhost:9090/food', {method:'GET',})
        .then((response) => {
            console.log(response)
            return response.json()
        })
    console.log(data)
    return data;
}
export async function saveDataMenu(dataMenu) {
    return await fetch('http://localhost:9090/food', {
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

export async function saveFoodImage(foodFormData, imagefile){
    const data = new FormData();
    let dataMenu = JSON.stringify(foodFormData)
    data.append('file', imagefile)
    data.append('artist', dataMenu)

    fetch("http://localhost:9090/saveFood", {
        method: 'POST',
        body: data,
        mode: "no-cors",
    });
    return data ;
}