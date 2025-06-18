
import "./globals.css";
import  Navbar  from "./header";
import Footer from './footer'

// const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "landing page",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
       <Footer/>
        </body>
    </html>
  );
}
