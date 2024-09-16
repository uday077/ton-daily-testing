"use client"
import { useAPI } from "@/contexts/apiProvider";
import Pagination from "@/components/Pagination";

export default function Airdrop() {
  const { airdropCalendar, formatDate } = useAPI(); 
    return (
      <div id="content" className="page-content-wrap airdrop_list">
        <div className="container">
          <main id="main">
            <h2 className="title">Airdrop Calendar</h2>

            <div
              className="table-responsive table-type-1 ico-calendar entry-box"
              id="calender-container"
            >
              <table style={{ minWidth: "850px" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Join Links</th>
                    <th>Winners</th>
                    <th>Qty</th>
                    <th>Ends In</th>
                  </tr>
                </thead>
                <tbody id="AirDropCaledar">
                {airdropCalendar?.map((entry, index) => (
                    <tr key={index}>
                      <td>
                        <div className="entry entry-ico">
                          <div className="thumbnail-attachment">
                            <a href={entry.join_link}>
                              <img
                                src={`https://backapi.bitcoinworld.news/api/media/${entry.logo}`}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="entry-body">
                            <h5 className="entry-title">
                              <a href={entry.join_link}>{entry.title}</a>
                            </h5>
                            <p>({entry.sort_name})</p>
                          </div>
                        </div>
                      </td>
                      <td>{entry.type}</td>
                      <td>
                        <a href={entry.join_link}>
                          <button className="btn btn-style-3 btn-small">
                            Join
                          </button>
                        </a>
                      </td>
                      <td>{entry.winners}</td>
                      <td>{entry.qty}</td>
                      <td>{formatDate(entry.end_in)}</td>
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
  