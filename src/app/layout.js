import Yekan from "@utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={Yekan.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
