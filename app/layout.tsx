import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sea View Development",
  description: "Croatia Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-screen border border-black overflow-x-auto mx-auto">
        <Header />
        <div className="h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
