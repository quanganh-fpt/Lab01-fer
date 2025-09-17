import React, { useState } from "react";
import { ListOfOrchids } from "../shared/ListOfOrchids";
import OrchidsPresentation from "./OrchidsPresentation";

export default function Orchids() {
  const [orchids] = useState(ListOfOrchids);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Orchid Collection</h2>
      <OrchidsPresentation orchids={orchids} />
    </div>
  );
}
