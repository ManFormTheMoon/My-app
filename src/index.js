import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Planets from "./components/Titles";	
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://postsa.herokuapp.com/v1/graphql",
  }),
});

const App1 = () => (
  <ApolloProvider client={client}>
	<App />
	<Planets />
  </ApolloProvider>
);

render(<App1 />, document.getElementById("root"));