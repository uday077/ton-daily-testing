import React from "react";
function LatestBlogs({ handleClick, formatDate, latestBlog }) {


  return (
    <div className="widget">
      <h6 className="widget-title">Latest</h6>
      <div className="entry-box">
        {latestBlog?.slice(0, 4).map((entry, key) => (
          <div className="entry entry-small" key={key}>
            <div className="thumbnail-attachment">
              <a onClick={() => handleClick(entry._id)}>
                <img
                  src={`https://backapi.bitcoinworld.news/api/media/${entry.blog_img}`}
                  alt=""
                />
              </a>
              <div className="entry-label">
                {entry.tag}
              </div>
            </div>
            <div className="entry-body">
              <h6 className="entry-title">
                <a onClick={() => handleClick(entry._id)}>{entry.title}</a>
              </h6>
              <div className="entry-meta">
                <time className="entry-date" datetime="">
                  {formatDate(entry.updatedAt)}
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
