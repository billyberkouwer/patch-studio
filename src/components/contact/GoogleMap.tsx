import "./google-map.scss";

export default function GoogleMap() {
  return (
    <div className="google-map__wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9916.253993987944!2d-0.0607839!3d51.5853996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ded6b7cb39d%3A0xb3ca852884f34937!2sThe%20Archives!5e0!3m2!1sen!2suk!4v1722860917071!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="map-overlay" />
    </div>
  );
}
