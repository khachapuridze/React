import React from "react";
import ReactDom from "react-dom";
import { ApolloProvider } from "react-apollo";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import apolloClient from "./utils/apollo";

const MyApp = (
    <BrowserRouter>
        <ApolloProvider client={apolloClient}>
            <App/>
        </ApolloProvider>

    </BrowserRouter>
);

ReactDom.render(MyApp, document.getElementById("root"));