import "@/styles/globals.css";
// cart provider
import UserProvider from "@/context/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
