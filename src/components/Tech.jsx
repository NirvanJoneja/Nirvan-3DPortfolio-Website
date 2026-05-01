import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent) ||
      window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobile);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div style={{
              width: "100%",
              height: "100%",
              background: "#1d1836",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={technology.icon}
                alt={technology.name}
                style={{ width: "60%", height: "60%", objectFit: "contain" }}
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");