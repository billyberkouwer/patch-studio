"use client";

import { useEffect, useRef } from "react";

/* SCRIPT ROOT IS A HACK TO GET IFRAME TO RESIZE CORRECTLE WITH NEXT LINK */

export default function ScriptRoot() {
  const scriptRoot = useRef<HTMLDivElement>(null); // gets assigned to a root node

  useEffect(() => {
    const script = `<script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>`;
    // creates a document range (grouping of nodes in the document is my understanding)
    // in this case we instantiate it as empty, on purpose
    const range = document.createRange();
    // creates a mini-document (light weight version), in our range with our script in it
    const documentFragment = range.createContextualFragment(script);
    // appends it to our script root - so it renders in the correct location
    scriptRoot.current?.append(documentFragment);
  }, []);

  return <div ref={scriptRoot}></div>;
}
