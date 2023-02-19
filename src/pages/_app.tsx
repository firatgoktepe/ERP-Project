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
          body {
            background-color: lightgray;
          }
          .drawerTitle {
            margin-left: 10px;
          }
          .primaryButton {
            margin-top: 5rem;
            margin-left: 6rem;
            width: 15%;
            text-align: center;
          }
        `}
      />
      <Global
        styles={css`
          body {
            background-color: lightgray;
          }
        `}
      />
      <Component {...pageProps} />
    </Provider>
  )
}
