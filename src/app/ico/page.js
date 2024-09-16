"use client"
import { useAPI } from "@/contexts/apiProvider";
import Pagination from "@/components/Pagination";

export default function Ico() {

  const { icoCalendar, formatDate } = useAPI(); 
  

  return (
    <div id="content" className="page-content-wrap">
      <div className="container">
        <main id="main">
          <h2 className="title">ICO Calendar</h2>

          <div className="table-responsive table-type-1 ico-calendar entry-box" id="calender-container">
            <table style={{ minWidth: "850px" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody id="ICO_List">
                {icoCalendar?.map((ico, index) => (
                  <tr key={index}>
                    <td>
                      <div className="entry entry-ico">
                        <div className="thumbnail-attachment">
                          <a href={ico.join_link}>
                            <img src={`https://backapi.bitcoinworld.news/api/media/${ico.logo}`} alt="" />
                          </a>
                        </div>
                        <div className="entry-body">
                          <h5 className="entry-title">
                            <a href={ico.join_link}>{ico.title}</a>
                          </h5>
                          <p>{ico.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>{formatDate(ico.start_date)}</td>
                    <td>{formatDate(ico.end_date)}</td>
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
