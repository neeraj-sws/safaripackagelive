import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import SafariCard from '../Components/Comman/SafariCard';
import Aside from '../Components/Comman/aside';
import TopRated from '../Components/Comman/TopRated';
import CommanBanner from "../Components/Comman/CommanBanner";
import api from '../api/api';
export default function SharedSafari() {

    //  const { slug } = useParams()
    // const [tabs, setTabs] = useState([]);
    //  const [safari, setSafari] = useState(null);

    //   useEffect(() => {
    //     api.get("/public/shared-safari")
    //       .then(res => {
    //         setSafari(res.data.data[0]); // 👈 slug yahin se
    //         // console.log("Slug from API:", res.data.data[0].slug);
    //       })
    //       .catch(console.error);
    //   }, []);

    //   if (!safari) return <p>Loading...</p>;

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <CommanBanner />
            </div>
            {/* Join Shared Safari Section  */}
            <div className="container-lg container-inner-padding">
                <Row className=" g-3 position-relative mb-5" style={{ minHeight: "100vh" }}>
                    <Aside
                        selectedState={selectedState}
                        selectedPark={selectedPark}
                        selectedSpecies={selectedSpecies}
                        onStateChange={handleStateChange}
                        onParkChange={handleparkChange}
                        onSpeciesChange={handleSpeciesChange}
                    />
                    <Col xs={12} lg={9} className="main-content-scroll">
                        <div className="filter-applied-container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-2 flex-wrap">
                                <div className="what's-found mb-lg-0 mb-3">
                                    <p className="mb-0">
                                        We found <b>{totalCount}</b> Active Shared Safari
                                    </p>

                                </div>
                                <div className="d-lg-inline-block d-flex align-items-center justify-content-between mb-3">
                                    <div className="sort-by mb-sm-0">
                                        <select className="form-select custom-dropdown" defaultValue="all">
                                            <option value="all">All</option>
                                            <option value="popular">Popular</option>
                                            <option value="latest">Latest</option>
                                            <option value="trending">Trending</option>
                                            <option value="top">Top Rated</option>
                                        </select>
                                    </div>
                                    {/* Filter Toggle Button (Visible on Mobile)  */}
                                    <div className="d-lg-none">
                                        <button className="btn" id="openFilter">
                                            <svg className="me-1 small" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="var(--text-dark)">
                                                <path
                                                    d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="select-filter-box d-flex align-items-center gap-2 flex-wrap mb-2">
                                {selectedState && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedState.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearStateFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}

                                {selectedPark && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedPark.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearParkFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {selectedSpecies && (
                                    <div className="filter-options rounded-pill bg-accent d-inline-block px-3 py-1">
                                        <p className="text-white mb-0">
                                            {selectedSpecies.label}
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    clearSpeciesFilter();
                                                }}
                                            >
                                                <i className="fa-solid fa-xmark text-white ps-1"></i>
                                            </a>
                                        </p>
                                    </div>
                                )}
                                {(selectedState || selectedPark || selectedSpecies) && (
                                    <button
                                        className="clear-all-btn p-0 border-0 bg-transparent text-decoration-none text-blue"
                                        onClick={clearAllFilters}
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                        </div>
                        <section id="join-shared-safari" className="mb-md--5 mb--3 pb--1">
                            <div className="card-container row align-items-center  gx-3">
                                {cards.length === 0 ? (
                                    <p>No safari found</p>
                                ) : (
                                    cards.map(item => (
                                        <SafariCard
                                            key={item.id || item.shared_safari_id}
                                            item={item}
                                        />
                                    ))
                                )}

                            </div>
                            {!bestTime && (
                                <Col xs={12} className=" d-flex justify-content-center align-items-center mt-4 pt-2 gap-2" wire:key="pagination">
                                    <button
                                        className=" prev-btn btn-sm "
                                        disabled={page === 1}
                                        onClick={() => setPage(p => p - 1)}>
                                        <i className="fas fa-chevron-left"></i> Previous
                                    </button>
                                    {getPageNumbers().map(num => (
                                        <button
                                            key={num}
                                            className={`page-btn page btn-sm  ${page === num ? "disabled" : ""}`}
                                            // className={page === num ? " active" : ""}
                                            onClick={() => setPage(num)}
                                        >
                                            {num}
                                        </button>
                                    ))}


                                    <button
                                        className="page next-btn btn-sm "
                                        disabled={page === lastPage}
                                        onClick={() => setPage(p => p + 1)}>
                                        Next<i className="fas fa-chevron-right"></i>
                                    </button>
                                </Col>
                            )}
                        </section>

                        {/* Top Rated Park   */}
                        <TopRated />
                    </Col>

                </Row>
            </div>
            <Footer />

        </>
    );
}
export default SharedSafari;