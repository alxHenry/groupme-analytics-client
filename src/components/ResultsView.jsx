import React from "react";
import { createCache, createResource } from "simple-cache-provider";

const cache = createCache();
const fetchGroupAnalytics = createResource(
  ([analytics, ms = 0]) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(analytics);
      }, ms);
    });
  },
  ([analytics, ms]) => analytics
);

const ResultsView = () => {
  const data = fetchGroupAnalytics.read(cache, ["data", 3000]);

  return <h2>Results: {data}</h2>;
};

export default ResultsView;
