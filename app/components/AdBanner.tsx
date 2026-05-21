"use client";

import { useEffect, useRef, useState } from "react";

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

const AdBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
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

  useEffect(() => {
    if (!visible || !iframeRef.current) return;
    const blob = new Blob([AD_HTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, [visible]);

  return (
    <div ref={containerRef} className="flex justify-center my-8 overflow-x-auto" style={{ minHeight: 90 }}>
      {visible && (
        <iframe
          ref={iframeRef}
          width={728}
          height={90}
          className="flex-shrink-0 border-0"
          scrolling="no"
          title="Advertisement"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default AdBanner;
