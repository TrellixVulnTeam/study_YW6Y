import type { AppProps } from 'next/app'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Component {...pageProps} />
    </PrismicProvider>
  )
}

export default MyApp
