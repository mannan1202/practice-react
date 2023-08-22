import '@/styles/globals.css';
import store from '../store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
