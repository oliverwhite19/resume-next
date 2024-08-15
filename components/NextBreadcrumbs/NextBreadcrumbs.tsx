'use client';

import React, { useContext } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs, Space } from '@mantine/core';
import UserContext from '../UserContext/UserContext';

const NextBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <>
      <Breadcrumbs>
        <Link href={'/'}>Home</Link>
        {pathNames.map((link, index) => (
          <Link
            href={`/${pathNames.slice(0, index + 1).join('/')}`}
            key={index}
          >
            {link[0].toUpperCase() + link.slice(1, link.length)}
          </Link>
        ))}
      </Breadcrumbs>
      <Space h="md" />
    </>
  );
};

export default NextBreadcrumb;
