import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from '../../api/api';
export default function SafariCard() {
    const [list, setList] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const PER_PAGE = 9;
    //    const lastPage = 794; // API se aata hai
    const visibleCount = 3;

    useEffect(() => {
        api.get("/public/shared-safari", {
            params: {
                page: page,
                per_page: PER_PAGE
            }
        })
            .then(res => {
                setTabs(res.data?.data || []);
                setLastPage(res.data?.last_page || 1);
            })
            .catch(err => {
                console.error("API ERROR:", err);
                setTabs([]);
            });
    }, [page]);

    useEffect(() => {
        const temp = [];

        for (let i = 0; i < list.length; i++) {
            temp.push(list[i]);
        }

        setTabs(temp);
    }, [list]);

    const getPageNumbers = () => {
        let start = Math.max(1, page - 1);
        let end = start + visibleCount - 1;

        if (end > lastPage) {
            end = lastPage;
            start = Math.max(1, end - visibleCount + 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const location = useLocation();
    const navigate = useNavigate();

    let showButton = false;
    let buttonText = "";
    let navigateTo = "";

    switch (location.pathname) {
        case "/":
            showButton = true;
            buttonText = "Join Safari";
            navigateTo = "/SafariDetail";
            break;

        case "/join-shared-safari":
            showButton = true;
            buttonText = " View Detail ";
            navigateTo = "/SafariDetail";
            break;

        case "/safari-packages":
            showButton = true;
            buttonText = "Enquire Now";
            navigateTo = "/PackagesDetail";
            break;

        case "/SafariDetail":
            showButton = true;
            buttonText = "Enquire Now";
            navigateTo = "/SafariDetail";
            break;

        case "/PackagesDetail":
            showButton = true;
            buttonText = "Enquire Now";
            navigateTo = "/PackagesDetail";
            break;



        default:
            showButton = true;
            buttonText = "Enquire ";
            navigateTo = "/PackagesDetail";
    }
    const currentPath = location.pathname;
    const { pathname } = location;

    if (pathname === `/species-detail/packages`) {
        showButton = true;
        buttonText = "Enquire Now";
        navigateTo = "/PackagesDetail";
    }

    if (pathname === '/species-detail/species-safaris') {
        showButton = true;
        buttonText = "Join Safari";
        navigateTo = "/SafariDetail";
    }

    if (pathname === "/park-detail/park-package") {
        showButton = true;
        buttonText = "Enquire Now";
        navigateTo = "/PackagesDetail";
    }
    if (pathname === '/park-detail/park-safari') {
        showButton = true;
        buttonText = "Join Safari";
        navigateTo = "/SafariDetail";
    }
    const bestTime = location.pathname === "/safari-packages";
    return (
        <>
            {/* Join Shared Safari Section  */}
            {tabs.length === 0 && <p>No data found</p>}

            {tabs.map((item, index) => (
                <Col xl={4} sm={6} className=" join-safari-card-box mt-3 rounded-3" key={index}>
                    <Card className=" rounded-3" id="Card_Img">
                        {/* Card Image  */}
                        <img className="card-img-top rounded-top-3" src={item.display_image}
                            alt="Card image" style={{ width: "100%", objectFit: "cover", height: "220px" }} />
                        <Card.Body className="p-0 border-bottom">

                            <div className="card-body-inner border-bottom p-0">
                                <div className="card-title border-bottom p-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h4 className="mb-0 card-text">
                                            {item.slug}
                                        </h4>
                                    </div>
                                    <div className="cityplace-text">
                                        <span>
                                            {item.park.name.length > 30
                                                ? item.park.name.slice(0, 30) + "..."
                                                : item.park.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-text p-2">
                                    {/* Highlights partition  */}
                                    <div className="d-flex justify-content-between">
                                        <div className="text-center">
                                            <p className="mb-0 total-safari">safari</p>
                                            <p className="mb-0 total-safari-in-number">{item.no_of_safari}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 total-seat">Seats</p>
                                            <p className="mb-0 total-seat-in-number">{item.share_seats}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 organizer">Organized by</p>
                                            <p className="mb-0 organizer_name"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body-inner price-container flex-wrap p-0">
                                <div className="starting-price d-flex align-items-center justify-content-between border-bottom p-2">
                                    <p className="mb-0"> Price:</p>
                                    <span className="mb-0 text-muted">₹{item.min_price_pp}-₹{item.max_price_pp}</span>
                                </div>
                                <div className=" my-2 pb-1 text-center">
                                    {showButton && (
                                        <button
                                            style={{ fontSize: "14px" }}
                                            onClick={() => navigate(navigateTo)}
                                            className="btn-sm btn-primary blue-btn-hover border-0 rounded-1" >
                                            {buttonText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            {!bestTime &&(
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
        </>
    );

}