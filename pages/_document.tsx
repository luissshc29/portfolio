import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <html lang="pt-Br"></html>
            <Head>
                <link rel='shortcut icon' href='/shortcut-icon.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}