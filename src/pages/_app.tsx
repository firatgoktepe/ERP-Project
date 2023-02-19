import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from '../redux/store/store'
import { Global, css } from '@emotion/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <Global
          styles={css`
            .logoImage {
              border-radius: 50%;
            }
            .logoImage:hover {
              cursor: pointer;
            }
            .drawerTitle {
              margin-left: 15px !important;
              font-size: 1.2rem !important;
            }
            .primaryButton {
              marginTop: '5rem',
              marginLeft: '6rem',
              width: '15%',
              textAlign: 'center',
            }
          `}
        />
      </>

      <Component {...pageProps} />
    </Provider>
  )
}
