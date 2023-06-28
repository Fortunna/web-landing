import Store from "@/stores";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
      <div id="modal"></div>
    </Store>
  );
}
