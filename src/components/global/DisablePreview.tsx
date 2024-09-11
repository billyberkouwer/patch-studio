"use client";

import Button from "./Button";
import { MouseEvent } from "react";

export default function DisablePreview() {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    fetch("/api/draft-mode/disable", { method: "GET" }).then(() => {
      window.location.reload();
    });
  }
  return (
    <div className="disable-preview__wrapper">
      <p>You are viewing the unpublished preview version of this site</p>
      <Button state="bold" callback={handleClick}>
        Disable preview mode
      </Button>
    </div>
  );
}
