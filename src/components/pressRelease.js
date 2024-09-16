import React from "react";

function PressRelease({ handleClick, formatDate, pressReleases}) {
  return (
    <div className="widget">
      <h6 className="widget-title">Press Releases</h6>
      <div className="entry-box" id="PressReleases">
        {pressReleases?.map((elem, index) => (
          <div className="entry entry-small" key={index}>
            <div className="entry-body">
              <h6 className="entry-title">
                <a onClick={() => handleClick(elem._id)}>{elem.title}</a>
              </h6>
              <div className="entry-meta">
                <time className="entry-date" datetime="2018-12-21">
                  {formatDate(elem.updatedAt)}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PressRelease;
