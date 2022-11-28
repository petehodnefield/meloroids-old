import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Component/Page imports
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Interval from "./pages/Interval/Interval";
import Freestyle from "./pages/Freestyle/Freestyle";
import Header from "./components/Header";
import Login from "./pages/Login";
import Timer from "./components/Timer";

const httpLink = createHttpLink({ uri: "/graphql" });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  // link: httpLink,
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
document.title = "Meloroids";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="artists/:artists/Freestyle" element={<Freestyle />} />
          <Route
            path="artists/:artists/Interval"
            element={<Interval></Interval>}
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
