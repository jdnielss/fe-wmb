import Swal from "sweetalert2";

export async function fetchDataTable(pagination){
    const data = await fetch(`http://10.10.13.150:9090/getTable?size=16&page=${pagination}`, {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}
export async function fetchTableById(idTable){
    const data = await fetch(`http://10.10.13.150:9090/table/${idTable}`, {method:'GET',})
        .then((response) => {
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
        .then( async (res) => {
            let respond = await res.json();
            if (res.status === 200){
                await Swal.fire(
                    'Success!',
                    'Input Data Success!',
                    'success'
                )
            }else if(respond.message ==="No message available"){
                await Swal.fire(
                    'Error!',
                    'Please fill in correctly',
                    'error'
                )
            }
            else await Swal.fire(
                'Error!',
                'Table number already exists'+respond.message,
                'error'
            )
        }).catch();
}
export async function updateTable(dataTable) {
    return await fetch('http://10.10.13.150:9090/updateTable', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(dataTable)
    })
        .then( async (res) => {
            let respond = await res.json();
            if (res.status === 200){
                await Swal.fire(
                    'Success!',
                    'Update Table Success!',
                    'success'
                )
            } else await Swal.fire(
                'Error!',
                'Table number already exists',
                'error'
            )
        }).catch();
}
export async function fetchDataTableAvailable(){
    const data = await fetch('http://10.10.13.150:9090/tableAvailable', {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}