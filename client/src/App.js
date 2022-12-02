// import logo from "./logo.svg";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Timer from "./components/Timer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomeScreen from "./pages/HomeScreen";

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
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="body">
          <div className="header">
            <a href="#">
              <h1>Meloroids </h1>
            </a>{" "}
          </div>
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/train" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/train/artist/:artists/Freestyle"
              element={<Freestyle />}
            />
            <Route
              path="/train/artists/:artists/Interval"
              element={<Interval></Interval>}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
