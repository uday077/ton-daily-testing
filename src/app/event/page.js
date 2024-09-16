"use client";

import { useAPI } from "@/contexts/apiProvider";
import Pagination from "@/components/Pagination";

export default function Event() {
  
  const { eventCalendar, formatDate } = useAPI(); 
  

  return (
    <div id="content" className="page-content-wrap">
      <div className="container">
        <main id="main">
          <h2 className="title">EVENT Calendar</h2>

          <div
            className="table-responsive table-type-1 ico-calendar entry-box"
            id="calender-container"
          >
            <table style={{ minWidth: "850px" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody id="ICO_List">
                {eventCalendar?.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <div className="entry entry-ico">
                        <div className="thumbnail-attachment">
                          <a href={entry.join_link}>
                            <img src={`https://backapi.bitcoinworld.news/api/media/${event.logo}`} alt="" />
                          </a>
                        </div>
                        <div className="entry-body">
                          <h5 className="entry-title">
                            <a href={entry.join_link}>{event.title}</a>
                          </h5>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>{formatDate(event.start_date)}</td>
                    <td>{formatDate(event.end_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="pagination" id="pagination-container">
            <Pagination />
          </ul>
        </main>
      </div>
    </div>
  );
  }
  