import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
  DocumentInitialProps,
} from 'next/document';
import load from '../components/css/load';
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
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&family=Bangers&family=Hammersmith+One&family=ZCOOL+XiaoWei&display=swap'
            rel='stylesheet'
          />
          <style>
            {load}
          </style>
        </Head>

        <body >
          <div className='globalLoader'>
            <div className="loader">
              <div></div>
              <div></div>
            </div>
          </div>

          <Main />
          <NextScript />
        </body>
      </Html>

    );
  }
}

export default MyDocument;
