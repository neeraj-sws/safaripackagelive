import React from 'react';
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../../css/style.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';

export default function aside() {
    const [park, setPark] = useState("");
    const [animal, setAnimal] = useState("");
    const [state, setState] = useState("");
    return (
        <>

            {/* Sidebar Filter  */}
            <aside className="col-12 col-lg-3 mt-lg-3 mt-0">
                <div className="filter-sidebar-wrapper rounded-3 border shadow-sm">
                    <div className="filter-sidebar-content rounded-3 p-3">
                        {/* Close Button for Mobile */}
                        <div className="d-flex justify-content-end d-lg-none">
                            <button className="btn-close" id="closeFilter" aria-label="Close"></button>
                        </div>

                        <h5 className="filter-title text-blue mb-0">Select Filters</h5>

                        {/* State Selection  */}
                        <div className="filter-group py-3 border-bottom mb-0">
                            <label htmlFor="stateSelect" className="form-label">Select State</label>
                            <select className="form-select"
                                id="stateSelect" name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="" disabled>Select State</option>
                                <option value="MadhyaPradesh">Madhya Pradesh</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                            </select>
                        </div>
                        {/* Species Selection  */}
                        <div className="filter-group py-3 border-bottom mb-0">
                            <label htmlFor="speciesSelect" className="form-label">Select Species</label>
                            <select className="form-select" id="speciesSelect"
                                name="species" value={animal}
                                onChange={(e) => setAnimal(e.target.value)}
                            >
                                <option value="" disabled>Select Species</option>
                                <option value="tiger">Tiger</option>
                                <option value="leopard">Leopard</option>
                                <option value="elephant">Elephant</option>
                            </select>
                        </div>
                        {/* National Parks Selection  */}
                        <div className="filter-group py-3 border-bottom mb-0">
                            <label htmlFor="speciesSelect" className="form-label">Select National Park</label>
                            <select
                                className="form-select"
                                id="speciesSelect"
                                name="species"
                                value={park}
                                onChange={(e) => setPark(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select National Park
                                </option>
                                <option value="kanha">Kanha National Park</option>
                                <option value="ranthambore">Ranthambore National Park</option>
                                <option value="corbett">Corbett National Park</option>
                            </select>
                        </div>
                        {/* Accordion Filters  */}
                        <Accordion id="filterAccordion" defaultActiveKey="0">
                            {/* Best Time */}
                            <Accordion.Item eventKey="0" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Best time to visit
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="monsoon" />
                                        <label className="form-check-label" htmlFor="monsoon">Monsoon</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="prewin" />
                                        <label className="form-check-label" htmlFor="prewin">Pre-Winters</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="winter" />
                                        <label className="form-check-label" htmlFor="winter">Winters</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="summer" />
                                        <label className="form-check-label" htmlFor="summer">Summer</label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Stay Category  */}
                            <Accordion.Item eventKey="1" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Stay Category
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="premium" />
                                        <label className="form-check-label" htmlFor="premium">Premium</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="standard" />
                                        <label className="form-check-label" htmlFor="standard">Standard</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="economical" />
                                        <label className="form-check-label" htmlFor="economical">Economical</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="notincluded" />
                                        <label className="form-check-label" htmlFor="notincluded">NotIncluded</label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Included  */}
                            <Accordion.Item eventKey="2" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Included
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="accommodation" />
                                        <label className="form-check-label" htmlFor="accommodation">Accommodation</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="pickup" />
                                        <label className="form-check-label" htmlFor="pickup">Pick &Drop</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="camera" />
                                        <label className="form-check-label" htmlFor="camera">CameraFee</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="permit" />
                                        <label className="form-check-label" htmlFor="permit">Permit</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="guide" />
                                        <label className="form-check-label" htmlFor="guide">GuideFee</label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Organizers  */}
                            <Accordion.Item eventKey="3" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Organizers
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="individual" />
                                        <label className="form-check-label" htmlFor="individual">Individual</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="safari-operator" />
                                        <label className="form-check-label" htmlFor="safari-operator">Safari Operator</label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Theme  */}
                            <Accordion.Item eventKey="4" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Theme
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="photography" />
                                        <label className="form-check-label" htmlFor="photography">Photography</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="safari-experience" />
                                        <label className="form-check-label" htmlFor="safari-experience">Safari Experience</label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Budget */}
                            <Accordion.Item eventKey="5" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Budget
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="range-slider position-relative">
                                        <div className="slider-track"></div>
                                        <input type="range" id="minRange" min="1000" max="10000" step="500" defaultValue={1000} />
                                        <input type="range" id="maxRange" min="1000" max="10000" step="500" defaultValue={10000} />
                                    </div>
                                    <div className="range-values d-flex justify-content-between mb-2">
                                        <span id="minPrice">₹1000</span>
                                        <span id="maxPrice">₹10000</span>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Tour Duration  */}
                            <Accordion.Item eventKey="6" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Tour Duration
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="range-slider position-relative mb-3">
                                        <div
                                            className="slider-track position-absolute top-50 start-0 w-100 translate-middle-y">
                                        </div>
                                        <input type="range" id="minDays" min="1" max="6" step="1" defaultValue={1}
                                            className="position-absolute w-100" style={{ pointerEvents: "none" }} />
                                        <input type="range" id="maxDays" min="1" max="7" step="1" defaultValue={7}
                                            className="position-absolute w-100" />
                                    </div>
                                    <div className="range-values d-flex justify-content-between">
                                        <span id="minLabel">1D/2N</span>
                                        <span id="maxLabel">6D/7N+</span>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* Total Safari  */}
                            <Accordion.Item eventKey="7" className='bg-transparent border-0 border-bottom rounded-0'>
                                <Accordion.Header>
                                    Total Safaris
                                </Accordion.Header>
                                <Accordion.Body className='pt-0'>
                                    <div className="range-slider position-relative mb-3">
                                        <div className="slider-track position-absolute top-50 start-0 w-100 translate-middle-y">
                                        </div>
                                        <input type="range" id="minSafari" min="1" max="5" step="1" defaultValue={1}
                                            className="position-absolute w-100" style={{ pointerEvents: "none" }} />
                                        <input type="range" id="maxSafari" min="1" max="6" step="1" defaultValue={6}
                                            className="position-absolute w-100" />
                                    </div>
                                    <div className="range-values d-flex justify-content-between">
                                        <span id="minSafariLabel">1 Safari</span>
                                        <span id="maxSafariLabel">5+ Safaris</span>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </aside>
        </>
    );

}