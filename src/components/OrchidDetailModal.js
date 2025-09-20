import React from "react";

export default function OrchidDetailModal({ orchid, show, onHide }) {
  if (!show || !orchid) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{orchid.name}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img 
                  src={orchid.image} 
                  className="img-fluid rounded" 
                  alt={orchid.name}
                  style={{ height: "300px", objectFit: "cover", width: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <h6><strong>Category:</strong> {orchid.category}</h6>
                <h6><strong>Origin:</strong> {orchid.origin}</h6>
                <h6><strong>Color:</strong> {orchid.color}</h6>
                <h6><strong>Rating:</strong> ⭐ {orchid.rating}/5</h6>
                {orchid.isSpecial && (
                  <span className="badge bg-success fs-6">Special Collection</span>
                )}
                <div className="mt-3">
                  <h6><strong>Description:</strong></h6>
                  <p className="text-muted">
                    This beautiful {orchid.category} orchid originates from {orchid.origin}. 
                    It features stunning {orchid.color.toLowerCase()} flowers and is rated 
                    {orchid.rating}/5 stars by our experts.
                    {orchid.isSpecial && " This is a special collection item."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
