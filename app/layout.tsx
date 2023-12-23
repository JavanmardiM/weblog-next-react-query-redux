import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./theme-switcher";
import { ReduxProviders } from "./store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "weblog",
  description: "weblog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[inter.className, "dark:bg-slate-800"].join(" ")}>
        <ReduxProviders>
          <Providers>
            <ThemeSwitcher />
            {children}
          </Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}
