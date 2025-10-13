import React from "react";
import { ListOfOrchids } from "../../shared/ListOfOrchids";

export default function Naturals() {
  const naturalOrchids = ListOfOrchids.filter(o => o.isNatural);

  return (
    <div className="row">
      {naturalOrchids.map((orchid) => (
        <div key={orchid.id} className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src={orchid.image}
              className="card-img-top"
              alt={orchid.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{orchid.name}</h5>
              <p className="card-text">
                <strong>Origin:</strong> {orchid.origin} <br />
                <strong>Color:</strong> {orchid.color} <br />
                <strong>Category:</strong> {orchid.category} <br />
                <strong>Rating:</strong> ⭐ {orchid.rating}
              </p>
              {orchid.isSpecial && (
                <span className="badge bg-success">Special</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// Lưu ý: Cần đảm bảo rằng trong ListOfOrchids có thuộc tính isNatural để lọc các loài lan tự nhiên