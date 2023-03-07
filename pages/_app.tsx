import AppLayout from "@/components/Layouts/app";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout className={poppins.className}>
      <Component {...pageProps} />
    </AppLayout>
  );
}
