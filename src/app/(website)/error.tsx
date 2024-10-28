"use client";

import Button from "@/components/global/Button";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
        position: "relative"
      }}
    >
      <h2>Sorry - something went wrong!</h2>
      <p>There was an error with the website.</p>
      <Button callback={() => router.replace("/")}>Return Home</Button>
    </div>
  );
}
