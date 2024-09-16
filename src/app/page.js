'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '@/components/slider';
import { useRouter } from 'next/navigation';
import { useAPI } from '@/contexts/apiProvider';
import LatestBlogs from '@/components/latestBlogs';
import PressRelease from '@/components/pressRelease';
import IcoCalendar from '@/components/IcoCalendar';
import MostRead from '@/components/MostRead';

export default function Home() {

  const { handleChange, inputValues, formatDate, latestBlog, pinBlogs, allBlogs, icoCalendar, mostReadBlog, pressReleases,
    ads200x200,
    advertisment728x90,
    advertisment320x100,
    advertisment970x90 } = useAPI();

  const router = useRouter();
  const handleClick = (articleId) => {
    router.push(`/article/${articleId}`);
  };

  const [displayedData, setDisplayedData] = useState(allBlogs?.slice(0, 2));
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
  }, []);

  useEffect(() => {
    setDisplayedData(allBlogs?.slice(0, 2));
    setAllDataLoaded(false);
  }, [allBlogs]);

  const handleLoadMore = () => {
    setDisplayedData(allBlogs);
    setAllDataLoaded(true);
  };

  const closeAddHandler = () => {
    document.getElementById("ad-bottom").style.display = 'none';
  }

  return (
    <>
      <div id="content" className="page-content-wrap2 no-tps">
        <div className="container">
          <div className="content-element5">
            <div className="row">
              <aside id="sidebar" className="sticky-bar col-lg-2 col-md-12">
                <LatestBlogs handleClick={handleClick} formatDate={formatDate} latestBlog={latestBlog} />

                <PressRelease handleClick={handleClick} formatDate={formatDate} pressReleases={pressReleases} />

                <div className="widget">
                  <div className="banner-title">Advertisement</div>
                  <div id="ads200x200">
                    <a href={ads200x200?.redirect_link} target='_blank' className="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${ads200x200?.image}`} alt="" /></a>
                  </div>
                </div>
              </aside>
              <main id="main" className="col-lg-10 col-md-12">
                <div className="news-holder">
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="mySwiper"
                  >
                    {pinBlogs?.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => handleClick(slide._id)}
                      >
                        <Slider slide={slide} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="row no-gutters">
                  <div className="main col-lg-8 col-md-12 lside">
                    <div className="content-element2">
                      <div className="banner-title">Advertisement</div>
                      <div id="ads728x90">
                        <a href={advertisment728x90?.redirect_link} target='_blank' className="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${advertisment728x90?.image}`} alt="" /></a>
                      </div>
                    </div>
                    <div className="content-element4">
                      <div className="entry-box row" id="main-blogs">
                        {displayedData?.map((elem, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="entry entry-small">
                              <div className="thumbnail-attachment">
                                <a href={`/article/${elem._id}`}>
                                  <img
                                    src={`https://backapi.bitcoinworld.news/api/media/${elem.blog_img}`}
                                    alt=""
                                  />
                                </a>
                                <div className="entry-label">
                                  {elem.tag}
                                </div>
                              </div>
                              <div className="entry-body">
                                <h5 className="entry-title">
                                  <a href={`/article/${elem._id}`}>{elem.title}</a>
                                </h5>
                                <div className="entry-meta">
                                  <time className="entry-date" datetime="">
                                    {formatDate(elem.updatedAt)}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="align-center">
                      {allDataLoaded ? (
                        <></>
                      ) : (
                        <button className="btn" onClick={handleLoadMore}>
                          Load More Posts
                        </button>
                      )}
                    </div>
                  </div>

                  <aside className="sidebar sticky-bar col-lg-4 col-md-12 sbr">
                    <div className="widget">
                      <h6 className="widget-title">Calculator</h6>

                      <div className="calc-section">
                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.tonValue}
                                onChange={handleChange}
                                name="tonValue"
                              />
                              <span>TON</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.tonUsdValue}
                              onChange={handleChange}
                              name="tonUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type4" className="select-list"></ul>
                            <select id="TON_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>

                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.btcValue}
                                onChange={handleChange}
                                name="btcValue"
                              />
                              <span>BTC</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.btcUsdValue}
                              onChange={handleChange}
                              name="btcUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type2" className="select-list"></ul>
                            <select id="BTC_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>

                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.ethValue}
                                onChange={handleChange}
                                name="ethValue"
                              />
                              <span>ETH</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.ethUsdValue}
                              onChange={handleChange}
                              name="ethUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type3" className="select-list"></ul>
                            <select id="ETH_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <IcoCalendar handleClick={handleClick} formatDate={formatDate} icoCalendar={icoCalendar} />

                    <div className="widget">
                      <div className="banner-title">Advertisement</div>
                      <div id="ads250x250">
                        <a href={ads200x200?.redirect_link} target='_blank' className="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${ads200x200?.image}`} alt="" /></a>
                      </div>
                    </div>
                    <MostRead handleClick={handleClick} mostReadBlog={mostReadBlog} />
                  </aside>
                </div>
              </main>
            </div>
          </div>

          <div className="align-center">
            <div className="banner-wrap m-banner-bottom" id="ad-bottom">
              <div className="banner-title banner-bottom">
                <span>Advertisement</span>
                <i className="bi bi-x-lg" onClick={closeAddHandler}></i>
              </div>
              <div id="ads970x90" className={windowWidth <= 768 ? "advertisment320x100" : "advertisment970x90"}>
                <a href={ windowWidth <= 768 ? advertisment320x100?.redirect_link : advertisment970x90?.redirect_link } target='_blank' className="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${ windowWidth <= 768 ? advertisment320x100?.image : advertisment970x90?.image }`} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
