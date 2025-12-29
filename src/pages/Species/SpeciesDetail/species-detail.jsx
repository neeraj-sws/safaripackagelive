import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import api from "../../../api/api";
import Speciessidetabs from "./SpeciesTab/species-tabs";
import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";
import Parkbanner from "../../../Components/Comman/park-banner";

export default function SpeciesDetail() {
  const { id } = useParams(); // bengal-tiger
  const [species, setSpecies] = useState(null);   // ✅ ADD THIS
  const [tabs, setTabs] = useState([]);            // ✅ ADD THIS

  useEffect(() => {
    api.get(`/public/species/${id}`)
      .then(res => {
        console.log("SPECIES API RESPONSE:", res.data.data);

        setSpecies(res.data.data); // ✅ NOW VALID
        setTabs(res.data.data.characterstic_details || []);
      })
      .catch(err => console.error("Species API error:", err));
  }, [id]);

  if (!species) return <p>Loading species...</p>;

  return (
    <>
      <Header />
      <Parkbanner species={species} />

      {/* main tabs: Overview / Packages / Shared Safari */}
      <Speciessidetabs />

      {/* 🔥 pass tabs to OverviewLayout */}
      <Outlet context={{ species, tabs }} />

      <Footer />
    </>
  );
}
