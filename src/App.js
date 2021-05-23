import logo from './logo.svg';
import close from './close.png';
import './App.css';

import React from 'react'
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import Planets from './components/Titles';


import { useQuery, useMutation, gql } from "@apollo/client";

const PLANETS = gql`
{
  posts {
    id
    textvalue
    title
  }
}
`;

const ADD_POST = gql`
	mutation MyMutation($textvalue: String!, $title: String!) {
	  MyMutation(textvalue: $textvalue, title: $title) {
		affected_rows
	  }
	}
`;
/*
const Temperary = ({ temp }) => {
	console.log(1);
	const [addPost] = 
};
*/


function App() {
	const [addPost] = useMutation(ADD_POST);	
	return (
		<div className="App">
			<header className="App-header">
				<div className="Main-block"> 
					<div className="Add-post-all">
						<div className="Add-post-block"> 
							<img src={logo} width="50px" className="Add-post-button"></img>
							<input className="Add-post-textfield" placeholder="What's new?"></input>
							<a href="#" className="public-round" onClick={() => {
								console.log("fffffffff");
								let postList1 = document.getElementsByClassName("Posts-list")[0];
								let title = document.getElementsByClassName("Add-post-textfield")[0].value;
								if (title == "" || title == null) {
									return;
								}
								let cont = document.getElementsByClassName("Add-area")[0];
								console.log(cont.value);
								let newStr = "";
								for (var i = 0; i < cont.value.length; i++) {
									console.log(cont.value[i]);	
									if (cont.value[i] == '\n') {
										console.log(1);
										newStr += "<br>";
									} else {
										newStr += cont.value[i];
									}
								}
								console.log(newStr);
								id++;
								postList1.insertAdjacentHTML("afterbegin", '<div class="post" id="post' + id + '"><span class="postName" id="postName' + id + '">' + title + '</span><p class="postText" id="postText' + id + '">' + newStr + '</p></div>');
								removeCreatingPost();
	
								console.log("gggggggggggg");
								addPost( {variables: { title:title, textvalue:newStr } } );	
					
							}}>Post</a>
							<img src ={close} width="50px" className="Close-pos-button"></img>
						</div>
					</div>

					<div className="Posts-list">
						
					</div>
				</div>
			</header>
		</div>
	);
}

let postArray = [];
let id = 2;
export default App;

function handler1() {
	let postList = (document.getElementsByClassName("Add-post-all"))[0];
	document.getElementsByClassName("Add-post-textfield")[0].removeEventListener("click", handler1);
	postList.insertAdjacentHTML("beforeend", "<div class='Add-more-block'><textarea class='Add-area' type='text' wrap='hard' style='resize:none; margin : 20px; width : 37vw; height : 15vh;'></textarea></div>");
}

function AddsadasdasdsaPost() {
	console.log("sdasifjjsd;fds");
	//const [addPost] = useMutation(ADD_POST);
	//addPost({variables: { title:"kiris", textvalue:"kiris" } });
	
}
/*
function AddNewPost() {
		let postList1 = document.getElementsByClassName("Posts-list")[0];
		let title = document.getElementsByClassName("Add-post-textfield")[0].value;
		if (title == "" || title == null) {
			return;
		}
		let cont = document.getElementsByClassName("Add-area")[0];
	
		id++;
		postList1.insertAdjacentHTML("afterbegin", '<div class="post" id="post' + id + '"><span className="postName" id="postName' + id + '">Title' + id + '</span><p className="postText" id="postText' + id + '">Here will be some text about my love to Maniachka</p></div>');
		document.getElementById("postName" + id).textContent = title;
		document.getElementById("postText" + id).textContent = cont.value;
		removeCreatingPost();
	
		console.log("gggggggggggg");
		addPost( {variables: { title:"kiris", textvalue:"kiris" } } );	
}*/

function removeCreatingPost() {
	let postList2 = document.getElementsByClassName("Add-more-block")[0];
	if (postList2 != null) {
		document.getElementsByClassName("Add-post-all")[0].removeChild(postList2);
		document.getElementsByClassName("Add-post-textfield")[0].value = "";
		document.getElementsByClassName("Add-post-textfield")[0].addEventListener("click", handler1);
	}
}

function startWorking() {
	console.log((document.getElementsByClassName("Add-post-block"))[0]);

	document.getElementsByClassName("Add-post-textfield")[0].addEventListener("click", handler1);

	document.getElementsByClassName("Close-pos-button")[0].addEventListener("click", removeCreatingPost);
}

setTimeout(startWorking, 0);