import "@/app/ui/global.css";
import {inter} from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
    <head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio de BROULIN Grégoryg"/>
    </head>
    <body className={`${inter.className} antialiased`}>
    <div className="navBar"><SideNav/></div>
      <div className="content">{children}</div>
      </body>
    </html>
  );
}
