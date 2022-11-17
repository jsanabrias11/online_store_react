export const getProducts = async () => {    
    try {
        const url = 'https://jsanabrias11.github.io/online_store_react_dbjson/db.json'
        const resp = await fetch(url);
        const productJson = await resp.json();
        return productJson;
        
    } catch (error) {
        console.log("No pude cargar: " + error);
    }
}