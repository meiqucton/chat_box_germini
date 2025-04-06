require('dotenv').config();
const express = require('express');
const axios = require('axios');
const model_chatbox = require('../models/Model_chatbox');
const Model_sql = require('../models/Model_sql');
const { json } = require('body-parser');
const { Client } = require('@elastic/elasticsearch');
const natural = require('natural');
const pinecone = require('../config/API_pinecone.mjs');
const index = pinecone.pc.Index('chatbox-ai');

let text;

// Hàm xây dựng text từ dữ liệu sản phẩm
const buildText = async () => {
    try {
        const products = await Model_sql.getProduct();
        const getPro = products.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.mo_ta,
            price: product.gia,
            rate: product.so_danh_gia,
            soluocmua: product.luot_mua
        }));
         text = getPro.map(product => 
            `${product.id} - ${product.name} - ${product.description} - ${product.price} - ${product.rate} - ${product.soluocmua}`
        ).join(" ");  

    } catch (error) {
        console.error("Lỗi khi truy vấn Elasticsearch:", error);
    }
};

// Hàm gọi Gemini API để lấy embedding
const getEmbedding = async () => {
    try {
       await buildText(); // Gọi hàm để xây dựng text trước khi lấy embedding
       console.log("Text:", text);
      
        const res = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            { input: text }, // Sử dụng biến text đã được xây dựng
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        // Hiển thị kết quả nhận được từ API
        console.log("Embedding Response:", res.data);

    } catch (error) {
        console.error("Lỗi khi truy vấn Gemini API:", error.response ? error.response.data : error.message);
    }
};

// Gọi hàm để lấy embedding
getEmbedding();
