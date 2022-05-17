import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="text-white">
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>NOT FOUND</h1>
          <Link to="/">
            <button type="primary">Back Home</button>
          </Link>
        
      
    </div>
  );
}

export default NotFound;
