import * as React from "react";
import { render } from "react-dom";
import * as firebase from "firebase/app";
import "firebase/database";

import { credentials } from "./test-credentials";
import { FirebaseDatabaseNode, FirebaseDatabaseProvider } from "../index";

const config = {
  apiKey: credentials.apiKey,
  authDomain: credentials.authDomain,
  databaseURL: credentials.databaseURL,
  projectId: credentials.projectId,
  storageBucket: credentials.storageBucket,
  messagingSenderId: credentials.messagingSenderId
};
import ReactJson from "react-json-view";

const App = () => {
  return (
    <FirebaseDatabaseProvider {...config} firebase={firebase}>
      <div>hai</div>
      <FirebaseDatabaseNode path="maximes/" limitToFirst={2}>
        {d => {
          return <ReactJson src={d} />;
        }}
      </FirebaseDatabaseNode>
      <FirebaseDatabaseNode path="maximes/-L8m-aeCHQO7qtMVvUfM">
        {d => {
          return <ReactJson src={d} />;
        }}
      </FirebaseDatabaseNode>
      <FirebaseDatabaseNode path="maximes/-L8m-aeCHQO7qtMVvUfMa">
        {d => {
          return <ReactJson src={d} />;
        }}
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
};
render(<App />, document.getElementById("root"));
