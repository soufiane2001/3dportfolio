"use client";

import { useEffect, useRef } from "react";

const AdBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    (window as any).atOptions = {
      key: "9b023632a679f5f14478f0b74f0983be",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };
    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/9b023632a679f5f14478f0b74f0983be/invoke.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-x-auto">
      <div ref={containerRef} style={{ width: 728, height: 90 }} className="flex-shrink-0" />
    </div>
  );
};

export default AdBanner;
