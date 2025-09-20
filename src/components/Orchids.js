import React, { useState } from "react";
import { ListOfOrchids } from "../shared/ListOfOrchids";
import OrchidsPresentation from "./OrchidsPresentation";
import OrchidDetailModal from "./OrchidDetailModal";

export default function Orchids() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleShowDetail = (orchid) => {
    setSelectedOrchid(orchid);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setSelectedOrchid(null);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Our Beautiful Orchids</h2>
      <OrchidsPresentation 
        orchids={ListOfOrchids} 
        onShowDetail={handleShowDetail}
      />
      <OrchidDetailModal 
        orchid={selectedOrchid}
        show={showModal}
        onHide={handleHideModal}
      />
    </div>
  );
}
