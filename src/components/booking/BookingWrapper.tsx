import { Suspense } from "react";
import BookingIframe from "./BookingIframe";
import ScriptRoot from "./ScriptRoot";
import LoadingBookings from "./LoadingBookings";
import LoadingBookingsFallback from "./LoadingBookingsFallback";

export default function BookingWrapper() {
  return (
    <>
      <ScriptRoot />
      <Suspense fallback={<LoadingBookingsFallback />}>
        <BookingIframe />
      </Suspense>
    </>
  );
}
