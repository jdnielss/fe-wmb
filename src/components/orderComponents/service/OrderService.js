import Swal from "sweetalert2";
import axios from "axios";

export async function fetchDataOrder(){
    const data = await axios.get('http://10.10.13.150:9090/order')
        .then((response) => {
            return response.json()
        });
    return data;
}


export async function fetchDataOrderById(idOrder){
    const data = await axios.get(`http://10.10.13.150:9090/order/${idOrder}`)
        .then((response) => {
            return response.json()
        });
    return data;
}

export async function saveDataOrder(orderForm) {
    return await fetch('http://10.10.13.150:9090/order', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(orderForm)
    })
        .then( async (res) => {
            if (res.status === 200){
                await Swal.fire(
                    'Success!',
                    'Order Berhasil',
                    'success'
                )
                console.log(res.json())
            } else await Swal.fire(
                'Error!',
                ' ' + res.message,
                'error'
            )
        }).catch();
}
