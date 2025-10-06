import React from "react";
import { useParams } from "react-router-dom";
import { ListOfOrchids } from "../shared/ListOfOrchids";

export default function Detail() {
  const { id } = useParams(); // lấy id từ URL
  const orchid = ListOfOrchids.find((o) => o.id === id);

  if (!orchid) return <h2 className="text-center">Orchid not found</h2>;

  return (
    <div className="container my-4">
      <h2>{orchid.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={orchid.image}
            alt={orchid.name}
            className="img-fluid rounded shadow"
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Origin:</strong> {orchid.origin}
          </p>
          <p>
            <strong>Color:</strong> {orchid.color}
          </p>
          <p>
            <strong>Category:</strong> {orchid.category}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {orchid.rating}/5
          </p>
          {orchid.isSpecial && (
            <span className="badge bg-info fs-6">Special Orchid</span>
          )}
          <div className="mt-3">
            <h6>
              <strong>Description:</strong>
            </h6>
            <p className="text-muted">
              This beautiful {orchid.category} orchid originates from{" "}
              {orchid.origin}. It features stunning {orchid.color.toLowerCase()}{" "}
              flowers and is rated {orchid.rating}/5 stars by our experts.{" "}
              {orchid.isSpecial && " This is a special collection item."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
