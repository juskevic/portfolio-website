import '@/styles/globals.css';

import {NextUIProvider} from "@nextui-org/react";

export default function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}
