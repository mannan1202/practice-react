import '@/styles/globals.css';
import store from '../store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MyContext } from '@/contexts/MyContext';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const [text, setText] = useState('');
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MyContext.Provider value={{ text, setText }}>
          <Component {...pageProps} />
        </MyContext.Provider>
      </QueryClientProvider>
    </Provider>
  );
}
