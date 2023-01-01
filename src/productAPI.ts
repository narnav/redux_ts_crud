// 3 - actual server call - AXIOS
import axios from 'axios'
const SERVER ="http://localhost:3005/products/"

export function getDataFromServer() {
    return  axios.get(SERVER)
}
export function addProduct(newProduct:any) {
    return  axios.post(SERVER,newProduct)
}
export function delProduct(id:number) {
    return  axios.delete(SERVER +id)
}
export function updProduct(newProduct:any) {
    return  axios.put(SERVER +newProduct.id,newProduct)
}