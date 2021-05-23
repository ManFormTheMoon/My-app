import React from "react";
import { useQuery, gql } from "@apollo/client";

const PLANETS = gql`
{
  posts {
    id
    textvalue
    title
  }
}
`;

function addPosts(data) {
	console.log(data.posts);
	let postList1 = document.getElementsByClassName("Posts-list")[0];
	for (let i = 0; i < data.posts.length; i++) {
		postList1.insertAdjacentHTML("afterbegin", '<div class="post" id="post' + data.posts[i].id + '"><span class="postName" id="postName' + data.posts[i].id + '">' + data.posts[i].title + '</span><p class="postText" id="postText' + data.posts[i].id + '">' + data.posts[i].textvalue + '</p></div>');
	}
}

const Planets = ({ newPlanets }) => {
	const { loading, error, data } = useQuery(PLANETS);
	if (loading) return <p>Loading ...</p>;
	if (error) return <p>Error :(</p>;
	console.log("load");
	console.log(data.posts);
	addPosts(data);
	return null;
};



export default Planets;