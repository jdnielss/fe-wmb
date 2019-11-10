export async function saveDataOrder(orderForm) {
    return await fetch('http://10.10.13.150:9090/saveOrder', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify(orderForm)
    })
        .then((res) => {
            return res.json()
        }).catch(err => err);
}