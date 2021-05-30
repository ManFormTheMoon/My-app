import React, { FunctionComponent, useState, useEffect } from 'react';
import './App.css';
import { NewPostForm } from './components/NewPostForm';
import { PostList } from './components/PostList';
import { IPost } from './interfaces/IPost'
import { useQuery, gql, useMutation } from "@apollo/client";

const POSTS = gql`
{
  posts {
    id
    title
  }
}
`;

const ADD_POST = gql`
mutation MyMutation2($id: Int, $title: String!) {
  insert_posts(objects: {id: $id, title: $title}) {
    affected_rows
  }
}

`;


const REMOVE_POST = gql`
	mutation MyMutation($id : Int) {
		delete_posts(where: {id: {_eq: $id}}) {
		affected_rows
		}
	}
`;

let mainId = 0;

const App:FunctionComponent = () => {
  const [postList, setPostList] = useState<IPost[]>([]);
  const { loading, error, data } = useQuery(POSTS);
  const [addPostToDB] = useMutation(ADD_POST);
  const [removePostFromDB] = useMutation(REMOVE_POST);

  useEffect(() => {
    if(loading === false && data){
      let temp : Array<IPost> = [];
      for (let i = data.posts.length - 1; i >= 0; i--) {
        const newPost : IPost = {
          title : data.posts[i].title,
          id :  data.posts[i].id,
        }
        mainId = data.posts[i].id;
        temp.push(newPost);
      }
      setPostList(temp);
    }
  }, [loading, data])

  const addPost = (title : string) => {
    mainId++;
    const newPost : IPost = {
      title : title,
      id :  mainId
    }
    setPostList(prev => [newPost, ...postList]);
    addPostToDB({ variables: {id : mainId, title : title}});
  }

  const removeHandler = (id : number) => {
    setPostList(prev => prev.filter(post => post.id !== id));
    removePostFromDB({ variables : {id : id}});   
  }

  return (  
    <div className="container">
      <NewPostForm onAdd = {addPost}/>
      
      <PostList posts={postList} onRemove={removeHandler}/>
    </div>
  );
}

export default App;
