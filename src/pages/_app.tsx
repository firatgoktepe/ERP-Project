import { Provider } from 'react-redux'
import '../styles/globals.css'
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
          .logoImage:hover {
            cursor: pointer;
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
      <Component {...pageProps} />
    </Provider>
  )
}
