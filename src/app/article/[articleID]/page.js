"use client";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useAPI } from "@/contexts/apiProvider";
import IcoCalendar from "@/components/IcoCalendar";
import MostRead from "@/components/MostRead";
import LatestBlogs from "@/components/latestBlogs";
import { useRouter } from 'next/navigation';

export default function ArticlePage({ params }) {
  const { formatDate, icoCalendar, mostReadBlog, latestBlog, ads200x200 } = useAPI();
  const [fullBlog, setFullBlog] = useState();

  useEffect(() => {
    const fetchFullBlog = async () => {
      try {
        const response = await fetch(
          `https://backapi.bitcoinworld.news/api/blog/${params.articleID}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setFullBlog(result.data);
      } catch (error) {
        console.log("Error fettichin Pin blog----------->", error);
      }
    };

    fetchFullBlog();
  }, []);

  const router = useRouter();
  const handleClick = (articleId) => {
    router.push(`/article/${articleId}`);
  };

  return (
    <>
      <div className="breadcrumbs-wrap no-title">
        <div className="container">
          <ul className="breadcrumbs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Post</li>
          </ul>
        </div>
      </div>
      <div id="content" className="page-content-wrap article">
        <div className="container">
          <div className="row">
            <main id="main" className="col-lg-9 col-md-12">
              <div className="content-element">
                <div className="entry-single">
                  <div className="row">
                    <div className="sidebar col-sm-4">
                      <div className="widget">
                        <div className="entry-box">
                          <div className="entry entry-small">
                            <div className="thumbnail-attachment">
                              <div className="entry-label">Blockchain</div>
                            </div>

                            <div className="entry-body">
                              <div className="entry-meta">
                                <p>Date:&nbsp;</p>
                                <time className="entry-date">
                                  {fullBlog
                                    ? formatDate(fullBlog.createdAt)
                                    : "..."}
                                </time>
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget">
                        <div className="share-wrap">
                          <span className="share-title">Share this:</span>
                          <ul className="social-icons share v-type">
                            <li>
                              <a href={`https://x.com/compose/post?text=${fullBlog?.title}&url=https://tondaily.news/article/${fullBlog?._id}&via=TonDailyN`} target="_blank" className="sh-twitter">
                                <i className="bi bi-twitter-x"></i>
                              </a>
                            </li>
                            <li>
                              <a href={`https://t.me/share/url?url=https://tondaily.news/article/${fullBlog?._id}`} target="_blank" className="sh-telegram" >
                                <i className="bi bi-telegram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="main col-sm-8">
                      <h2 className="title">
                        <b id="title">{fullBlog?.title}</b>
                      </h2>
                      <div className="content-element2">
                        <img
                          src={`https://backapi.bitcoinworld.news/api/media/${fullBlog?.blog_img}`}
                          alt=""
                        />
                      </div>
                      <div className="content-element2">
                        {parse(
                          typeof fullBlog?.description === "string"
                            ? fullBlog.description
                            : "..."
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside id="sidebar" className="col-lg-3 col-md-12 sbl">
              
            <IcoCalendar handleClick={handleClick} formatDate={formatDate} icoCalendar={icoCalendar} />

              <div className="widget">
                <div className="banner-title">Advertisement</div>
                <div id="ads250x250">
                  <a href={ads200x200?.redirect_link} target='_blank' className="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${ads200x200?.image}`} alt="" /></a>
                </div>
              </div>

              <MostRead handleClick={handleClick} mostReadBlog={mostReadBlog} />

              <LatestBlogs handleClick={handleClick} formatDate={formatDate} latestBlog={latestBlog} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
