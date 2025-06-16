import { getPostsModel, createPostModel } from '../models/posts.model.js';

export const getPostsController = async (req, res) => {
    try {
        const posts = await getPostsModel();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const createPostController = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body;
        if (!titulo || !url || !descripcion) {
            return res.status(400).json({ error: "Todos los campos son obligatorios." });
        }
        const newPost = await createPostModel({ titulo, url, descripcion });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};