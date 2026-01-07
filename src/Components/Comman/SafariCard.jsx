import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from '../../api/api';
const SafariCard = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!item) return null;

    let buttonText = "Join Safari";
    let navigateTo = "/SafariDetail";

    if (location.pathname === "/safari-packages") {
        buttonText = "Enquire Now";
        navigateTo = "/PackagesDetail";
    }

    return (
        <Col xl={4} sm={6} className="join-safari-card-box mt-3 rounded-3">
            <Card className="rounded-3">
                <img
                    className="card-img-top"
                    src={
                        item.display_image
                            ? item.display_image
                            : `${import.meta.env.VITE_API_BASE_URLs}/assets/images/GPT-1.png`
                    }
                    style={{ height: "220px", objectFit: "cover" }}
                />
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
                            <button
                                style={{ fontSize: "14px" }}
                                onClick={() => navigate(navigateTo)}
                                className="btn-sm btn-primary blue-btn-hover border-0 rounded-1" >
                                {buttonText}
                            </button>
                            {/* {showButton && (
                                        
                                    )} */}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SafariCard;

