import Head from "next/head";
import { AppLayoutProps } from "./types";

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <main className={className}>
      <Head>
        <title>Floc Assignment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Floc Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </main>
  );
};

export default AppLayout;
