import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <html lang="pt-Br"></html>
            <Head>
                <link rel='shortcut icon' href='/shortcut-icon.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}