import React from 'react';

const NotFound = ({ location }) => (
  <div className="lightslide">
    <div className="container">
      <div className="row">
        <div className="content lightslide-box">
          <h1 className="white">
            <strong>404 {location.pathname} Not Found</strong>
          </h1>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound;
