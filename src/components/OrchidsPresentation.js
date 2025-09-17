import React from "react";

export default function OrchidsPresentation({ orchids }) {
  return (
    <div className="row">
      {orchids.map((orchid) => (
        <div className="col-md-3 mb-4" key={orchid.id}>
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
                <strong>Category:</strong> {orchid.category}
              </p>
              <p>
                ⭐ {orchid.rating} |{" "}
                {orchid.isSpecial ? (
                  <span className="badge bg-success">Special</span>
                ) : (
                  <span className="badge bg-secondary">Normal</span>
                )}
              </p>
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
