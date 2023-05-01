import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import { PageProps } from './Page.props';

export const Page = ({
  title,
  inter,
  style,
  ...props
}: PageProps & PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Memo game app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`} style={{ height: '100%' }}>
        {props.children}
      </main>
    </>
  );
};
