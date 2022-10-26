import Layout from "../components/Layout";
import "../styles/globals.css";
import { TransactionProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransactionProvider>
  );
}

export default MyApp;
