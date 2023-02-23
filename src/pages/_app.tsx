import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../redux/store/store'
import GlobalCSS from '@/components/specific/GlobalCSS/GlobalCSS'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalCSS />
      <Component {...pageProps} />
    </Provider>
  )
}
