import Document, { Head, Main, NextScript } from 'next/document';
import config from '../lib/config';

export default class ConfigDocument extends Document {
  static getInitialProps({ renderPage }) {
    return { ...renderPage(), config };
  }

  render() {
    return (
      <html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Document</title>
        <script dangerouslySetInnerHTML={{
          __html: `window.config=JSON.parse('${JSON.stringify(this.props.config)}');`
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      </html>
    )
  }
}
