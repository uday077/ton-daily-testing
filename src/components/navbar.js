"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAPI } from "../contexts/apiProvider";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
  }, []);

  const { navCurrVal } = useAPI();
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const pathname = usePathname();
  return (
    <>
      <nav
        id="mobile-advanced"
        className={`mobile-advanced ${showMenu ? "active" : ""}`}
      >
        <a id="advanced-menu-hide" href="#" onClick={handleShowMenu}></a>
        <ul id="menu" className="clearfix">
          <li className={pathname === "/" ? "current" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={pathname === "/ico" ? "current" : ""}>
            <a href="/ico">ICO Calender</a>
          </li>
          <li className={pathname === "/airdrop" ? "current" : ""}>
            <a href="/airdrop">Airdrop Calender</a>
          </li>
          <li className={pathname === "/event" ? "current" : ""}>
            <a href="/event">Events</a>
          </li>
        </ul>
      </nav>

      <div className="market-info">
        <div className="container top-market">
          <a href="/">
            <img
              className="Brand-logo"
              alt="LOGO"
              src={windowWidth <= 992
                  ? "/assets/img/logo2.png"
                  : "/assets/img/LOGO.png"
              }
            />
          </a>
          <div className="market-items">
            <div className="market-item">
              <div className="market-inner">
                <span>TON</span>
                <div id="TON">${navCurrVal?.tonUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>BTC</span>
                <div id="BTC">${navCurrVal?.btcUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>ETH</span>
                <div id="ETH">${navCurrVal?.ethUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>XRP</span>
                <div id="XRP">${navCurrVal?.xrpUsdValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="header" className="header sticky-header">
        <div className="menu-holder">
          <div className="container">
            <div className="menu-wrap">
              <div className="nav-item">
                {windowWidth <= 992 ? (
                  <button
                    id="responsive-nav-button"
                    className="responsive-nav-button"
                    onClick={handleShowMenu}
                  ></button>
                ) : (
                  <></>
                )}
                <nav id="main-navigation" className="main-navigation">
                  <ul id="menu" className="clearfix">
                    <li className={pathname === "/" ? "current" : ""}>
                      <a href="/">Home</a>
                    </li>
                    <li className={pathname === "/ico" ? "current" : ""}>
                      <a href="/ico">ICO Calender</a>
                    </li>
                    <li className={pathname === "/airdrop" ? "current" : ""}>
                      <a href="/airdrop">Airdrop Calender</a>
                    </li>
                    <li className={pathname === "/event" ? "current" : ""}>
                      <a href="/event">Events</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
