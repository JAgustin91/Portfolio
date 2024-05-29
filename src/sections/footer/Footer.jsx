import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container-fluid footer_container mt-4">
        <h4 className="text-center text-secondary my-5">
          - All rights reserved - {currentYear}. -
        </h4>
      </div>
    </>
  );
};

export { Footer };
