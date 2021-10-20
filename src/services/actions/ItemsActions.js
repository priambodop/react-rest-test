import { GET, POST } from "../../helpers/constant";
import { URL_ADD_ITEMS, URL_ITEMS_CATEGORY } from "../../helpers/path";

export function processAddItems(itemsData){
    let headers = new Headers();

    headers.append('Authorization', localStorage.getItem('token'));

    fetch(URL_ADD_ITEMS,{
        method: POST,
        headers: headers,
        body: JSON.stringify(itemsData),
    })
    .then(response => response.json())
    .then(data => 
        {
            localStorage.setItem('addedItems', JSON.stringify(itemsData));
        }
        )
    .catch(err => console.log(err))
}

export function processGetItemsCategory(){
    let headers = new Headers();

    headers.append('Authorization', localStorage.getItem('token'));

    fetch(URL_ITEMS_CATEGORY,{
        method: GET,
        headers: headers,
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('categories', JSON.stringify(data.payload.data));
    })
    .catch(err => console.log(err))
}