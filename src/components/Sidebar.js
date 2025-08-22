import AdSlot from "./AdSlot";

export default function Sidebar() {
  return (
    <aside className="col-md-4">
      {/* Sponsored Ad */}
      <div className="p-3 bg-light rounded shadow-sm mb-3">
        <h5 className="fw-bold mb-3">Sponsored</h5>
        <AdSlot height={250} width={300} /> {/* Medium Rectangle */}
      </div>

      {/* Promotions Ad */}
      <div className="p-3 bg-light rounded shadow-sm">
        <h5 className="fw-bold mb-3">Promotions</h5>
        <AdSlot height={90} width={728} /> {/* Leaderboard Banner */}
      </div>
    </aside>
  );
}
