// 3 - actual server call - AXIOS
import axios from 'axios'
const SERVER ="http://localhost:3005/products"
export function fetchData(age = 1) {
    return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: age +2 }), 2500)
  );
}
export function getDataFromServer() {
    return  axios.get(SERVER)
}


