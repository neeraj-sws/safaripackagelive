import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../../../api/api";

export default function Overview() {
  const { id, subtab } = useParams();

  // ✅ SAFE way (NO destructuring)
  const outletContext = useOutletContext();
  const tabs = outletContext?.tabs || [];
console.log("Overview context:", outletContext);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!id || tabs.length === 0) return;

    // default tab = overview
    const activeTab =
      tabs.find(t => t.slug === subtab) ||
      tabs.find(t => t.slug === "overview");

    if (!activeTab) return;

    api.get(`/public/species/tab/${id}`, {
      params: {
        species_characterstics: activeTab.species_characterstics,
        species_details_characterstic_id:
          activeTab.species_details_characterstic_id,
      },
    })
      .then(res => {
        console.log("OVERVIEW API RESPONSE:", res.data);
        setContent(res.data.data);
      })
      .catch(console.error);

  }, [id, subtab, tabs]);

  if (!content) return <p>Loading overview...</p>;

  return (
    <div>
      <h3>{activeTab?.title || "Overview"}</h3>
      <p>{content.short_description}</p>
    </div>
  );
}
