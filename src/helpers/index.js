import { json } from "react-router-dom";

export const getApi = async(url) =>{
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message)        
    }
}
