import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import NavigationProvider from "./NavigationProvider";
import { RecoilProvider } from "./RecoilProvider";
import { AuthProvider } from "@/services/AuthProvider";
import { LawyerProvider } from "@/services/LawyerPostProvider";
import { ChatProvider } from "@/services/ChatProvider";

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
          <LawyerProvider>
            <ChatProvider>
              <Providers>
                <RecoilProvider>
                  <NavigationProvider>{children}</NavigationProvider>
                </RecoilProvider>
              </Providers>
            </ChatProvider>
          </LawyerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
