import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { react } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data = [] } = useSWR(
    `https://example-apis.vercel.app/api/art/`,
    fetcher
  );
  console.log(data);
  return (
    <>
      <SWRConfig value={{ fetcher, refreshIntervall: 1000 }}>
        <GlobalStyle />
        <Component {...pageProps} pieces={data} />
      </SWRConfig>
    </>
  );
}
