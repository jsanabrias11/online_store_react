export const getProducts = async () => {    
    try {
        const resp = await fetch('db.json');
        const productJson = await resp.json();
        return productJson;
        
    } catch (error) {
        console.log("No pude cargar: " + error);
    }
}