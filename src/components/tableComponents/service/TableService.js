export async function fetchDataTable(pagination){
    const data = await fetch(`http://10.10.13.150:9090/getTable?size=12&page=${pagination}`, {method:'GET',})
        .then((response) => {
            console.log(response)
            return response.json()
        })
    return data;
}
export async function fetchTableById(idTable){
    const data = await fetch(`http://10.10.13.150:9090/table/${idTable}`, {method:'GET',})
        .then((response) => {
            console.log(response)
            return response.json()
        })
    return data;
}
export async function saveDataTable(dataTable) {
    return await fetch('http://10.10.13.150:9090/table', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(dataTable)
    })
        .then((res) => {
            return res.json()
        }).catch(err => err);
}
export async function fetchDataTableAvailable(){
    const data = await fetch('http://10.10.13.150:9090/tableAvailable', {method:'GET',})
        .then((response) => {
            console.log(response)
            return response.json()
        })
    console.log(data)
    return data;
}