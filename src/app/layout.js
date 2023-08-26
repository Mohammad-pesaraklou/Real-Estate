import { Yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={Yekan.className}>
      <body>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
