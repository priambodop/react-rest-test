import { GET } from "../../helpers/constant";
import { URL_RETRIEVE_ITEMS } from "../../helpers/path";

export function processGetItems(){

    let headers = new Headers();

    headers.append('Authorization', localStorage.getItem('token'));

    fetch(URL_RETRIEVE_ITEMS,{
        method: GET,
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('items', JSON.stringify(data.payload));
    })
    .catch(err => console.log(err));
}