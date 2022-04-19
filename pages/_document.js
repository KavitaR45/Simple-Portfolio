import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang='en'>
        <head>
          <title>Kavita Rawat - Personal Portfolio</title>
          <meta name="description" content="I’m a FrontEnd Developer specializing in building exceptional digital experiences with technologies like ReactJs, Gatsby, NextJs, Wordpress and Woocommerce" />
          <link rel="icon" href="/images/logo.svg" />
          <link rel="canonical" href="https://kavita-portfolio.netlify.app/" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}