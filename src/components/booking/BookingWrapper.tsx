import { Suspense } from "react";
import BookingIframe from "./BookingIframe";
import ScriptRoot from "./ScriptRoot";

export default function BookingWrapper() {
  return (
    <>
      <ScriptRoot />
      <Suspense>
        <BookingIframe />
      </Suspense>
    </>
  );
}
