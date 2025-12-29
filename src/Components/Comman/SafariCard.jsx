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
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function SafariCard() {

    const location = useLocation();
    const navigate = useNavigate();
    const { userId } = useParams()
    let showButton = false;
    let buttonText = "";
    let navigateTo = "";

    switch (location.pathname) {
        case "/":
            showButton = true;
            buttonText = "Join Safari";
            navigateTo = "/SafariDetail";
            break;

        case "/Sharedsafari":
            showButton = true;
            buttonText = "Join Safari";
            navigateTo = "/SafariDetail";
            break;

        case "/Safaripackages":
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
    //  console.log(location.pathname);
    // const pathSegments = location.pathname.split('/Sharedsafari');
    // console.log(pathSegments);
    const currentPath = location.pathname;

    // const parts = location.pathname.split("/").filter(Boolean);
    const { pathname } = location;

    if (pathname === "/species-detail/packages") {
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
    return (
        <>
            {/* Join Shared Safari Section  */}

            <Card className=" rounded-3" id="Card_Img">
                {/* Card Image  */}
                <img className="card-img-top rounded-top-3" src={animalCardImg}
                    alt="Card image" />
                <Card.Body className=" p-0">
                    <div className="card-body-inner border-bottom">
                        <div className="card-title border-bottom pb-1">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="mb-0 card-text">
                                    Ranthambore Tiger Safari
                                </h4>
                                <div className="count-days px-2 rounded-1">
                                    <span className="text-white">3N/4D</span>
                                </div>
                            </div>
                            <div className="cityplace-text">
                                <span>Ranthambore Tiger Reserve, Rajasthan</span>
                            </div>
                        </div>
                        <div className="card-text knowfor-list-home">
                            {/* Highlights partition  */}
                            <div>
                                <ul
                                    className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center">
                                    <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                        <img src={IconsPermitImg} alt="Safari Permit" />
                                        <p className="mb-0">Safari Permits</p>
                                    </li>
                                    <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                        <img src={IconsAccommodationImg} alt="Accommodation" />
                                        <p className="mb-0">Accommodation</p>
                                    </li>
                                    <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                        <img src={IconsmealsImg} alt="Meals" />
                                        <p className="mb-0">Meals</p>
                                    </li>
                                    <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                        <img src={IconsguideImg} alt="Guide" />
                                        <p className="mb-0">Guide</p>
                                    </li>
                                </ul>
                            </div>
                            {/* Known for partition  */}
                            <div className="knowfor-list mt-1 mb-1">
                                <h6 className="mb-0">Known For:</h6>
                            </div>
                            <ul
                                className="highlights highlights-grid knowfor-list ps-0 d-flex flex-wrap align-items-center">
                                <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Tiger</p>
                                </li>
                                <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Sloth Bear</p>
                                </li>
                                <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Dhole</p>
                                </li>
                                <li className="card-list-text d-flex align-items-center gap-1 mb-md-0 mb-0">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Barasingha</p>
                                </li>
                            </ul>

                            {/* Availability partition  */}
                            <div className="knowfor-list mt-1 mb-1">
                                <h6 className="mb-0">Availability:</h6>
                            </div>
                            <div
                                className="highlights highlights-grid d-flex align-items-center flex-wrap column-gap-2">
                                <div
                                    className="card-list-text d-flex align-items-md-center align-items-start gap-1 mb-md-0 mb-2">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Safari: 5</p>
                                </div>
                                <div
                                    className="card-list-text d-flex align-items-md-center align-items-start gap-1 mb-md-0 mb-2">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <p className="mb-0">Seats: 5</p>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between card-body-inner py-2 price-container flex-wrap">
                        <div className="starting-price">
                            <p className="mb-0">Starting Price:</p>
                            <span className="mb-0 text-muted">₹ 22,750</span>
                        </div>
                        {showButton && (
                            <button
                                onClick={() => navigate(navigateTo)}
                                className="btn-sm btn-primary blue-btn-hover border-0 rounded-1" >
                                {buttonText}
                            </button>
                        )}
                        {/* {showButton && (
                            // <button onClick={() => navigate(navigateTo)} className="btn-sm btn-primary blue-btn-hover border-0 rounded-1">
                            <button onClick={() => navigate(navigateTo)} className="btn-sm btn-primary blue-btn-hover border-0 rounded-1">
                                {buttonText}
                            </button>
                        )} */}
                    </div>
                </Card.Body>
            </Card>

        </>
    );

}