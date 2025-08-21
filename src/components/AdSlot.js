import { useEffect } from "react";

export default function AdSlot({ slot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="my-3 text-center">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}
