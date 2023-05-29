import '@/styles/globals.css'
import {AppContext, AppContextProvider} from '@/context/data'

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
