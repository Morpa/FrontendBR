import 'styles/fonts.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Router } from 'next/router'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NProgress from 'nprogress'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:3333',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Frontend BR</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Espaço para a divulgação de vagas para desenvolvedores frontend."
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
