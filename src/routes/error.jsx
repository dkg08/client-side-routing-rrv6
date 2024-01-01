import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const { error } = useRouteError();

  return (
    <div id="error-page">
      <h1>404 page not found</h1>
      <p>The page you are looking for is not available</p>
      <p>{error.message}</p>
    </div>
  );
}
