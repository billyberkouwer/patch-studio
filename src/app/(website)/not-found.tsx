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
        gap: "1rem",
        position: "relative",
      }}
    >
      <h2>The page you are trying to access does not exist.</h2>
      <p>You can still take a look at our work though!</p>
      <Button callback={() => router.replace("/")}>Return Home</Button>
    </div>
  );
}
