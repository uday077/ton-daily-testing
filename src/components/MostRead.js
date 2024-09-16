import React from "react";

function MostRead({ handleClick, mostReadBlog }) {
  return (
    <div className="widget">
      <h6 className="widget-title">Most read</h6>
      <ul className="most-read" id="most-read">
        {mostReadBlog?.map((elem, index) => (
          <li key={index}>
            <h6>
              <a onClick={() => handleClick(elem._id)}>{elem.title}</a>
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MostRead;
