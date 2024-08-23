import Script from "next/script";
import ScriptRoot from "../../../components/booking/ScriptRoot";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
