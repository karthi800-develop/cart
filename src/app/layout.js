import { Prompt, Comfortaa, Jost, Roboto, Rajdhani } from 'next/font/google'
import "./globals.css";
import  Navbar  from "./header";
import Footer from './footer'

// const inter = Inter({ subsets: ["latin"] });

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-comfortaa',
})
const prompt = Prompt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-prompt',
})
const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
  variable: '--font-jost',
})
const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-roboto',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rajdhani',})


export const metadata = {
  title: "landing page",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body   className={`${comfortaa.variable} ${rajdhani.variable} ${jost.variable} ${roboto.variable} ${prompt.variable} font-roboto`}>
        <Navbar/>
        {children}
       <Footer/>
        </body>
    </html>
  );
}
