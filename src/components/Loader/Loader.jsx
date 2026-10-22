import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true);

      setTimeout(() => {
        setVisible(false);
      }, 700);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-screen ${leaving ? "loader-leaving" : ""}`}>
      <div className="loader-content">
        <h1 className="loader-logo">
          Guna<span>.</span>
        </h1>

        <div className="loader-ring">
          <div className="loader-ring-inner" />
        </div>

        <p className="loader-text">BUILD. CREATE. GROW.</p>

        <div className="loader-progress">
          <span />
        </div>

        <p className="loader-caption">Preparing your experience...</p>
      </div>
    </div>
  );
}
