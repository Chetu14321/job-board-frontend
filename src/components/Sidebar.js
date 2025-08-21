import AdSlot from "./AdSlot";

export default function Sidebar() {
  return (
    <aside className="col-md-4">
      <div className="p-3 bg-light rounded">
        <h5>Sponsored</h5>
        <AdSlot slot="1111111111" />
      </div>
      <div className="p-3 bg-light rounded mt-3">
        <h5>Promotions</h5>
        <AdSlot slot="2222222222" />
      </div>
    </aside>
  );
}
