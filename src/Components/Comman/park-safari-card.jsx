import { useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import VectorImg from '../../assets/images/Vector.png';
import animalCardImg from '../../assets/images/animal-images/card-img.png';
import IconsPermitImg from '../../assets/images/icons/permit.svg';
import IconsAccommodationImg from '../../assets/images/icons/accommodation.svg';
import IconsmealsImg from '../../assets/images/icons/meals.svg';
import IconsguideImg from '../../assets/images/icons/guide.svg';
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function SafariCard() {

    const location = useLocation();
    const navigate = useNavigate();
    let showButton = false;
    let buttonText = "";
    let navigateTo = "";

    switch (location.pathname) {
        // case "/":
        //     buttonText = "Join Safari";
        //     navigateTo = "/SafariDetail";
        //     showButton = true;
        //     break;

        case "/Parkguides":
            buttonText = "View Details";
            showButton = true;
            navigateTo = "/park-detail";
            break;

        // case "/Safaripackages":
        //     showButton = true;
        //     buttonText = "Enquire Now";
        //     navigateTo = "/PackagesDetail";
        //     break;

        // case "/SafariDetail":
        //     showButton = true;
        //     buttonText = "Enquire Now";
        //     navigateTo = "/PackagesDetail";
        //     break;
        // case "/PackagesDetail":
        //     showButton = true;
        //     buttonText = "Enquire Now";
        //     navigateTo = "/SafariDetail";
        //     break;
        // default:
        //     buttonText = "Join Safari";
        //     showButton = true;
        //     navigateTo = "/";
    }

    return (
        <>
            {/* Join Shared Safari Section  */}

            <Card className="rounded-3">
                <small className="top-rated-park text-white bg-warning">Top Rated</small>
                {/* Card Image  */}
                <img className="card-img-top rounded-top-3" src={animalCardImg}
                    alt="Card image" />
                {/* Card Body  */}
                <Card.Body className=" rounded-bottom-3">
                    <div className="card-title border-bottom p-2 mb-0 bg-card">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 card-main-heading">
                                Tadoba-Andhari Tiger Reserve
                            </h4>
                        </div>
                        <div className="cityplace-text">
                            <span>Maharashtra, West India</span>
                        </div>
                    </div>
                    <div className="card-body-inner p-2 pt-1">

                        <div className="card-text">
                             {/* Park description partition  */}
                            <div
                                className="park-description border-bottom card-lines-divider pb-1 mb-1">
                                <p className="mb-0">
                                    Discover the untamed heart of India on this extraordinary
                                    wildlife
                                    expedition through the nation’s most revered natural
                                    sanctuaries.
                                </p>
                            </div>
                             {/* Best Time partition  */}
                            <div className="knowfor-list mb-2 d-flex align-items-center">
                                <h6 className="mb-0">Best Time:</h6>
                                <p className="mb-0 ps-2">October - March</p>
                            </div>


                             {/* Wildlife Found partition  */}
                            <div className="knowfor-list mt-1 mb-1">
                                <h6 className="mb-0">Wildlife Found:</h6>
                            </div>
                            <ul
                                className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center mb-2">
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Birds</p>
                                </li>
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Tigers</p>
                                </li>
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Elephants</p>
                                </li>
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Barasingha</p>
                                </li>
                            </ul>


                             {/* Safari Type partition  */}
                            <div className="knowfor-list mt-1 mb-1">
                                <h6 className="mb-0">Safari Type:</h6>
                            </div>
                            <ul
                                className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center mb-sm-2">
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa-solid fa-check link-text"></i>
                                    <p className="mb-0">Jeep Safari</p>
                                </li>
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa-solid fa-check link-text"></i>
                                    <p className="mb-0">Boat Safari</p>
                                </li>
                                <li
                                    className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-1">
                                    <i className="fa-solid fa-check link-text"></i>
                                    <p className="mb-0">Canter Safari</p>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="price-container text-center pb-3 pt-sm-2">
                        {/* <button
                            className=" btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-3">View
                            Details
                        </button> */}
                        {showButton && (
                            // <button onClick={() => navigate(navigateTo)} className="btn-sm btn-primary blue-btn-hover border-0 rounded-1">
                            //     {buttonText}
                            //     </button>

                                 <button onClick={() => navigate(navigateTo)}
                            className=" btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-3">View
                            Details
                        </button>
                            
                        )}
                    </div>

                </Card.Body>
            </Card>

        </>
    );

}