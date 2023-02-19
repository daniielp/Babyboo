import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalNav from 'src/components/GlobalNav';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Babyboo</title>
            </Head>
            <GlobalNav />
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default App