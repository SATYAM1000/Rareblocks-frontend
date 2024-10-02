import { Oswald } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

export const metadata = {
  title: "Quick-Poll",
  description:
    "Create, launch, and share polls effortlessly with QuickPoll. Engage your audience in real-time with instant vote tracking and live results.",
};

const inter = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "600"],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader color="#FF6A88" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
