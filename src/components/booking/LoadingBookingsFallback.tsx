import LoadingBookings from "./LoadingBookings";
import "./booking-iframe.scss";

export default function LoadingBookingsFallback() {
  return (
    <div className={`page__wrapper --hide-navbar`}>
      <div className="iframe__wrapper">
        <LoadingBookings />
      </div>
    </div>
  );
}
