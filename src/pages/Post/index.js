import './Post.css';
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import PostCard from 'components/PostCard';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa= {post.url}
                        //fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                           </ReactMarkdown>   
                           <ReactMarkdown>
                                {post.dons}
                           </ReactMarkdown>
                           <ReactMarkdown>
                                {post.jutsu}
                           </ReactMarkdown>
                           <ReactMarkdown>
                                {post.transformação}
                           </ReactMarkdown>
                           <ReactMarkdown>
                                {post.passiva}
                           </ReactMarkdown>                  
                        
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros Clãs que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>

    )
}