import { filterSrc } from "@/helpers";
import "./google-map.scss";

export default function GoogleMap({ iframe }: { iframe: string }) {
  const src = filterSrc(iframe);

  if (src) {
    return (
      <div className="google-map__wrapper">
        <div className="map-overlay" aria-hidden />
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="map-iframe"
        ></iframe>
      </div>
    );
  }

  return null;
}
