export async function fetchDataTransaction(){
    const data = await fetch('http://10.10.13.150:9090/transaction', {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}
export async function getDataTransactionDataById(idTransaction){
    const data = await fetch(`http://10.10.13.150:9090/transaction/${idTransaction}`, {method:'GET',})
        .then((response) => {
            return response.json()
        })
    return data;
}