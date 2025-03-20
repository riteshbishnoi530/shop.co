import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Shop Co",
  description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
  openGraph: {
   
    description: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed=""  data-new-gr-c-s-loaded="14.1226.0" >
        {children}
      </body>
    </html>
  );
}
