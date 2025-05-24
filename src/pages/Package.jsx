import React, { useEffect } from "react";
import { useFilterContext } from "../context/filter_context";
import paginate from "../pagination";
import { useBeachContext } from "../context/beach_context";

const Package = () => {
  const {
    filters,
    filtered_beach,
    searchBeach,
    page,
    handleNextPage,
    handlePageChange,
    handlePrevPage,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const { nation, beach_loading } = useBeachContext();
  useEffect(() => {
    document
      .querySelector(".hotel_list")
      .scrollIntoView({ behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    console.log("State: " + JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    console.log("Beach state: " + JSON.stringify(nation));
  }, []);

  return (
    <>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <div className="breadcrumb_iner_item text-center">
                  <h2>Packages</h2>
                  <p>home . Packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotel_list section_padding single_page_hotel_list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              {nation.length > 0 ? <p>{nation[1].name}</p> : <p></p>}
              <div className="section_tittle text-center">
                <h2>Top Hotel & Restaurants</h2>
                <p>
                  Waters make fish every without firmament saw had. Morning air
                  subdue. Our. Air very one. Whales grass is fish whales winged.
                </p>
              </div>
            </div>
          </div>

          {/* --- Search + Select Layout --- */}
          <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-3">
              <select
                defaultValue={-1}
                className="form-control"
                name="nation"
                onChange={(e) => {
                  updateFilters(e);
                }}
                style={{ maxWidth: "300px" }}
              >
                <option value={"all"}>Vui lòng chọn quốc gia</option>

                {nation.length > 0 ? (
                  nation.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })
                ) : (
                  <option value={"Viet Nam"}>Viet Nam</option>
                )}
              </select>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div className="d-flex gap-2" style={{ maxWidth: "100%" }}>
                <div className="input-group" style={{ maxWidth: "300px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Keyword"
                    onChange={(e) => {
                      searchBeach(e);
                    }}
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Search Keyword")}
                  />
                  <div className="input-group-append">
                    <button className="btn" type="button">
                      <i className="ti-search"></i>
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => clearFilters()}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* --- List --- */}
          <div
            className="row"
            id="beach-items"
            style={{ border: "1px solid white" }}
          >
            {filtered_beach.length > 0 ? (
              paginate(filtered_beach)[page].map((beach, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className="single_ihotel_list">
                    <img
                      style={{ height: "261px", width: "360px" }}
                      src={beach.avartar_url}
                      alt=""
                    />
                    <div className="hover_text">
                      <div className="hotel_social_icon">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-twitter-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="share_icon">
                        <i className="ti-share"></i>
                      </div>
                    </div>
                    <div className="hotel_text_iner">
                      <h3>
                        <a href={`singlebeach/${beach.id}`}> {beach.name}</a>
                      </h3>
                      <div className="place_review">
                        {[...Array(5)].map((_, i) => (
                          <a href="#" key={i}>
                            <i className="fas fa-star"></i>
                          </a>
                        ))}
                        <span>(210 review)</span>
                      </div>
                      <p>London, United Kingdom</p>
                      <p>Date: 23 Aug 2019</p>
                      <p>Duration: 5 days</p>
                      <h5>
                        From <span>$500</span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div
                  class="spinner-border"
                  style={{ marginRight: "400px" }}
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
                <p class="">Waiting a few seconds...</p>
              </>
            )}
          </div>

          {/* --- Pagination --- */}
          <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={handlePrevPage}
                  aria-label="Previous"
                >
                  <i className="ti-angle-left"></i>
                </button>
              </li>
              {filtered_beach.length > 0 &&
                paginate(filtered_beach).map((_, index) => (
                  <li className="page-item" key={index}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={handleNextPage}
                  aria-label="Next"
                >
                  <i className="ti-angle-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* --- Other Sections (Events + Services) --- */}
      {/* Bạn có thể giữ nguyên phần sau nếu không liên quan đến yêu cầu thay đổi layout search/select */}
    </>
  );
};

export default Package;
