// import App from 'next/app'
import Head from 'next/head';
import AppContainer from 'src/components/app-container';
import './_app.scss';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Ambrosia Bakery SF</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="title" content="ambrosiabakerysf.com" />
        <meta name="description" content="Home of Ambrosia Bakery SF" />
        <meta name="author" content="joshkang@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//fonts.googleapis.com/css?family=Raleway:400,300,600"
          rel="stylesheet"
          type="text/css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PSHFXM2');`,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSHFXM2"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <div id="fb-root" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1802467446634364";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));`,
        }}
      />
      <AppContainer>
        <Component {...pageProps} />
        <style jsx>
          {`
            .app {
              position: relative;
              height: 100%;
            }
          `}
        </style>
      </AppContainer>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
