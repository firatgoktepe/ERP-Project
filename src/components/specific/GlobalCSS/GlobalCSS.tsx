import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalCSS: React.FC = () => {
  return (
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
            "@global": {
              body: {
                backgroundColor: "red !important"
              }
          `}
      />
    </>
  )
}

export default GlobalCSS
