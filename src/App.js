import React, { Suspense } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ResultsView from "./components/ResultsView";

const Loading = () => <h3>Wait!</h3>;

const App = () => {
  return (
    <div className="App">
      <h1>GroupMe Analytics</h1>
      <InputForm />
      <Suspense fallback={Loading}>
        <ResultsView />
      </Suspense>
    </div>
  );
};

export default App;
