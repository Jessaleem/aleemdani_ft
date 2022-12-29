import Head from 'next/head';
import { Footer } from '../footer/Footer';
import { links } from '../../constants/footerLinksData';
import { useLayoutStyles } from './useLayoutStyles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { classes } = useLayoutStyles();
  return (
    <>
      <Head>
        <title>AleeMDani</title>
        <meta name='description' content='A page for therapies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classes.mainContainer}>{children}</main>
      <Footer data={links} />
    </>
  );
}
