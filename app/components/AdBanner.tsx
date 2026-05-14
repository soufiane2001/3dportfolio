"use client";

import { useEffect, useRef } from "react";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    const blob = new Blob([AD_HTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-x-auto">
      <iframe
        ref={iframeRef}
        width={728}
        height={90}
        className="flex-shrink-0 border-0"
        scrolling="no"
        title="Advertisement"
      />
    </div>
  );
};

export default AdBanner;
