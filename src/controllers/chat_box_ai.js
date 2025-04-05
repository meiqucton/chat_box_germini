require('dotenv').config();
const express = require('express');
const axios = require('axios');
const faiss = require('faiss-node');
const model_chatbox = require('../models/Model_chatbox');
const Model_sql = require('../models/Model_sql');



const dimension = 768; // Kích thước vector embedding (ví dụ với Gemini hoặc BERT)
const index = new faiss.IndexFlatL2(dimension);
const productEmbeddings = [];

const FAISS = async (req, res) => {
    try{
        const Product= await Model_sql.getProduct();
        
        for (const product of Product) {
          const text = {
            id: product.id,
            name: product.name,
            description: product.mo_ta,
            price: product.price,
            start: product.so_sao_trung_binh,
            combs_purchased: product.luot_mua,
            type_product: product. the_loai,
            time: product.thoigian_them,
          };
         const embedding = model_chatbox.AI_Chat_BOX(text);
          
        index.add(embedding);// FIX Lại "
          productEmbeddings.push({
            id: product.id, text
        });
    console.log("productEmbeddings:", productEmbeddings);
        }

    }catch(err){
        console.error("Error FAISS:", err);
    }
}
FAISS();