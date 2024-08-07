"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Studio() {
  return <NextStudio config={config} />;
}
