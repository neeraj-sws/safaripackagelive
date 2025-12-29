import { NavLink, useParams, Outlet, useOutletContext } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import Sidebar from "../Overview/sidebar";

export default function OverviewLayout() {
  const { id } = useParams();
  const outletContext = useOutletContext();
  console.log("Layout context:", useOutletContext());
  const tabs = outletContext?.tabs || [];
  console.log("Layout context:", outletContext);
  console.log("OverviewLayout tabs:", tabs);
  return (
    <div id="overview" role="tabpanel">
      <Row>
        {/* Sidebar */}
        <Sidebar speciesId={id} />

        <Col xs={12} lg={8} xl={9} className="main-content-scroll">
          {/* Dynamic overview sub-tabs */}
          <div className="bg-white packagetab-navbar species-detail-tabs rounded-3 px-4 py-1 shadow-sm mb-4">
            <div className="overflow-auto">
              <Nav variant="pills" className="main-tabs flex-nowrap gap-2">
                {tabs.map(tab => {
                  const slug = tab.title.trim().toLowerCase().replace(/\s+/g, "-");

                  return (
                    <NavLink
                      key={tab.species_details_characterstic_id}
                      to={`/species/${species.species_id}/overview/${slug}`}
                      className="nav-link"
                    >
                      {tab.title.trim()}
                    </NavLink>
                  );
                })}
              </Nav>
            </div>
          </div>

          {/* Sub-tab content */}
          <Outlet context={outletContext} />
        </Col>
      </Row>
    </div>
  );
}
