import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import NavigationProvider from "./NavigationProvider";
import { RecoilProvider } from "./RecoilProvider";
import { AuthProvider } from "@/services/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LawLink.pk",
  description: "Get the justice you deserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <RecoilProvider>
              <NavigationProvider>{children}</NavigationProvider>
            </RecoilProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
