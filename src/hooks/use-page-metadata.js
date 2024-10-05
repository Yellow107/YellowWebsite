import { useContext } from 'react';
import { useRouter } from 'next/router';

import { SiteContext } from './use-site';

import { constructPageMetadata } from '../lib/site';

export default function usePageMetadata({ metadata: pageMetadata }) {
  const { homepage, metadata: defaultMetadata } = useContext(SiteContext);

  const router = useRouter();

  const metadata = constructPageMetadata(defaultMetadata, pageMetadata, {
    homepage,
    router,
  });

  return {
    metadata,
  };
}
