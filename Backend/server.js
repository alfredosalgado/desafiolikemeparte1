import express from 'express';
import cors from 'cors';
import { getPostsController, createPostController } from './controllers/posts.controller.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/posts', getPostsController);
app.post('/posts', createPostController);

app.listen(PORT, () => {
    console.log(`🚀 Servidor "Like Me" escuchando en http://localhost:${PORT}`);
});