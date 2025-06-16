import pool from '../db/config.js';

export const getPostsModel = async () => {
    try {
        const sqlQuery = 'SELECT * FROM posts ORDER BY id DESC;';
        const { rows } = await pool.query(sqlQuery);
        return rows;
    } catch (error) {
        console.error("Error en modelo al obtener posts:", error);
        throw error;
    }
};

export const createPostModel = async ({ titulo, url, descripcion }) => {
    try {
        const likes = 0;
        const values = [titulo, url, descripcion, likes];
        const sqlQuery = 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *;';
        const { rows } = await pool.query(sqlQuery, values);
        return rows[0];
    } catch (error) {
        console.error("Error en modelo al crear post:", error);
        throw error;
    }
};