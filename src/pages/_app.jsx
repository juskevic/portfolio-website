import '@/styles/globals.css'; // Adjust the path according to your project structure

// This default export is required in a new `pages/_app.jsx` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
