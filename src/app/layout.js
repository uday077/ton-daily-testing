import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./bootstrap-grid.min.css";
import "./globals.css";
import "./responsive.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { APIProvider } from "@/contexts/apiProvider";


export const metadata = {
  title: "TON Daily",
  description: "",
  openGraph: {
    images: "/assets/img/Thumbnail.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </head>
      <APIProvider>
        <body>
          <div id="wrapper" className="wrapper-container index-page">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </APIProvider>
    </html>
  );
}
