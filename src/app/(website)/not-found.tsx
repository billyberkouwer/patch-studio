"use client"

import Button from "@/components/global/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div
      className="page__wrapper --fixed-height"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        position: "relative",
      }}
    >
      <h2>The page you are looking for doesn&apos;t exist.</h2>
      <Button callback={() => router.replace("/")}>Return Home</Button>
    </div>
  );
}
