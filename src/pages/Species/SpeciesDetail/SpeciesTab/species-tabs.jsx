import React from "react";
import { useState, useRef,useEffect } from 'react';
import api from '../../../../api/api'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from "../../../../Components/Comman/aside";
import SafariCard from '../../../../Components/Comman/SafariCard';
import Overview from './Overview/overview-layout';
import Sharedsafaris from '../SpeciesTab/sharedsafaris';
import Sepciesrated from "../../../Species/SpeciesDetail/SpeciesTab/species-rated";
export default function speciestabs() {
    const { id } = useParams();
  const [data, setData] = useState(null);
 const [tabs, setTabs] = useState([]);
 useEffect(() => {
    if (!id) return;

    api.get(`/public/species/tabs/${id}`)
      .then(res => {
        console.log("TABS API:", res.data.data);
        setTabs(res.data.data || []);
      })
      .catch(console.error);
  }, [id]);
    return (
        <>
            {/* Tabs Navigation */}
            <section id="package-details-nav" className="mb-4 border-bottom">
                <div className="container-lg container-inner-padding">
                    <div className="overflow-auto">
                        <Nav variant="pills" className="main-tabs flex-nowrap  gap-2" >
                            
                            <NavLink to={`/species/${id}/overview`}
                                className="fw-semibold bg-white nav-link">
                                Overview
                            </NavLink>
                            <NavLink to={`/species/${id}/packages`}
                                className="fw-semibold rounded-pill nav-link">
                                Packages
                            </NavLink>
                            <NavLink to={`/species/${id}/species-safaris`}
                                className="fw-semibold rounded-pill nav-link">
                                Shared Safaris
                            </NavLink>
                        </Nav>
                    </div>
                </div>
            </section>
            <div className="container-lg container-inner-padding mb-5">
                {/* Tabs Content  */}
                <div className="tab-content" id="ParkTabContent">
                    <div>
                        <Outlet context={{ tabs }} />
                    </div>
                    <div>
                        <Sepciesrated />
                    </div>
                </div>
            </div>

        </>
    );

}