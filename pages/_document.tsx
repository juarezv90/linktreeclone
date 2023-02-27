import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
      className='bg-gradient-to-l from-red-200 to-blue-400'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
