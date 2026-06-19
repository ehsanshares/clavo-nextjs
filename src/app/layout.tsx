import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartModal } from "@/components/layout/cart-modal";
import { ClavoScripts } from "@/components/clavo-scripts";

export const metadata: Metadata = {
  title: {
    default: "Clavo - Creative Design Agency Template",
    template: "%s - Clavo",
  },
  description:
    "Clavo — a modern agency template crafted to build digital brands that captivate and resonate. Perfect for showcasing creativity, services, and successful projects.",
  icons: {
    icon: "/assets/images/favicon.jpg",
    apple: "/assets/images/webclip.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="js">
      <head>
        <link href="/assets/fonts/fonts.css" rel="stylesheet" />
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link href="/assets/css/checkout.css" rel="stylesheet" />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <CartModal />
        <ClavoScripts />
      </body>
    </html>
  );
}
