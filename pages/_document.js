import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NBZV11M2DE"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NBZV11M2DE');
              `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "g9dfynwutm");
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3409788,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <form style={{display:"none"}} netlify="true" name="contactForm" method="POST" data-netlify="true">
          <input  type="text" name="name" label="Name"  title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}"  placeholder="Name"  required/>
          <input   label="Email" type="mail" name="email" title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"  required/>
          <input  label="Mobile Number" type="tel" name="phone"  className="phone" placeholder="Phone" required />
          <textarea  placeholder="Message" label="Message" type="text" name="msg" required/>
        <button type="submit"  className="contactFormbtn"><span> Submit</span></button>
        </form>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
