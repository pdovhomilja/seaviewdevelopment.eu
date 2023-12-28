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
      <body className="flex flex-col w-full h-screen">
        <div>
          <Header />
        </div>
        <div className="flex w-full h-full justify-center items-center overflow-x-auto">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
