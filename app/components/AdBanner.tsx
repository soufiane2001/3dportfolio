"use client";

import { useEffect, useRef, useState } from "react";
import { useAdvertisingConsent } from "./SitePrivacy";

const AD_HTML = `<!DOCTYPE html>
<html>
<head><style>*{margin:0;padding:0;overflow:hidden;}</style></head>
<body>
<script>
atOptions={
  'key':'9b023632a679f5f14478f0b74f0983be',
  'format':'iframe',
  'height':90,
  'width':728,
  'params':{}
};
</script>
<script src="https://www.highperformanceformat.com/9b023632a679f5f14478f0b74f0983be/invoke.js"></script>
</body>
</html>`;

export default function AdBanner() {
  const allowed = useAdvertisingConsent();
  return allowed ? <AdvertisingSlot /> : null;
}

function AdvertisingSlot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center my-8 overflow-x-auto" style={{ minHeight: 90 }}>
      {visible && (
        <iframe
          srcDoc={AD_HTML}
          width={728}
          height={90}
          className="flex-shrink-0 border-0"
          scrolling="no"
          title="Advertisement"
          loading="lazy"
          sandbox="allow-scripts allow-popups"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}
