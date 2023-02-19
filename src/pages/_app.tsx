import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../redux/store/store'
import { Global, css } from '@emotion/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          .logoImage {
            border-radius: 50%;
          }
        `}
      />
      <Component {...pageProps} />
    </Provider>
  )
}
