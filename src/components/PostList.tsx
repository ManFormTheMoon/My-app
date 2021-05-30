import React from 'react'
import { IPost } from '../interfaces/IPost';

type PostListProps = {
    posts : IPost[],
    onRemove(id : number) : void
}

export const PostList:React.FC<PostListProps> = ({ posts, onRemove }) => {
    return (
        <ul>
            {posts.map(post => {
                return (
                <li className="post">
                    <label>
                        <span>{post.title}</span>
                        <i className="material-icons red-text" onClick={() => onRemove(post.id)}>delete</i>
                    </label>
                </li>
                );
            })}
        </ul>
    );
}