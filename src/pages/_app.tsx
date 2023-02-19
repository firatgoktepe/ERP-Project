import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../redux/store/store'
import GlobalStyles from '@mui/material/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles
        styles={{
          h1: { color: 'red' },
          h2: { color: 'green' },
          body: { backgroundColor: 'lightpink' },
        }}
      />
      <Component {...pageProps} />
    </Provider>
  )
}
