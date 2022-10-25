import { useRouter } from "next/router";
import Head from "next/head";
export default function DetailedProject() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div>
      <Head>
        <title>{title && title[0].toUpperCase() + title.slice(1)}</title>
      </Head>
      {title}
    </div>
  );
}
