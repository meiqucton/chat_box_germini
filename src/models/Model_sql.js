const db = require('../config/dbSQL');

const getProduct = async (req, res) => {
    try{
        const result = await db.query('SELECT * FROM sanpham');
        const products = result[0];
        return products;
    }catch (error) {
        console.error("Loi sql Models:", error);
    }
}
getProduct();
module.exports = {
    getProduct,
}