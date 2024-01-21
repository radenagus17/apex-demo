import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <main className={`min-h-screen flex-col ${inter.className}`}>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
