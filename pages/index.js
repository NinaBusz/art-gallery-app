import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
