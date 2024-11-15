import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (url) => {
          const res = await fetch(url);
          if (!res.ok) {
            const error = new Error('An error occurred while fetching the data.');
            try {
              error.info = await res.json();
            } catch {
              error.info = { message: 'Failed to parse error information.' };
            }
            error.status = res.status;
            throw error;
          }
          return res.json();
        },
        revalidateOnFocus: false, 
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
