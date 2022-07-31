import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&family=Bangers&family=Hammersmith+One&family=Mr+Dafoe&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}

export default MyDocument;
