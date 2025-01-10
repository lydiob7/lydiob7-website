import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { MobileApp } from '~/types';
import { APP_MOBILE_APP } from 'astrowind:config';
import { cleanSlug, MOBILE_APP_BASE, trimSlash, MOBILE_APP_PERMALINK_PATTERN } from './permalinks';

const generatePermalink = async ({ id, slug, publishDate }: { id: string; slug: string; publishDate: Date }) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = MOBILE_APP_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);
  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};
export const mobileAppPostsPerPage = APP_MOBILE_APP?.postsPerPage;
const getNormalizedMobileApp = async (mobileApp: CollectionEntry<'mobileApp'>): Promise<MobileApp> => {
  const { id, slug: rawSlug = '', data } = mobileApp;
  const {
    designers,
    developers,
    downloadLinks,
    publishDate: rawPublishDate = new Date(),
    title,
    excerpt,
    image,
  } = data;
  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, publishDate }),
    publishDate,
    title,
    excerpt,
    image,
    designers,
    developers,
    downloadLinks,
  };
};

const load = async function (): Promise<Array<MobileApp>> {
  const mobileApps = await getCollection('mobileApp');
  const normalizedMobileApps = mobileApps.map(async (mobileApp) => await getNormalizedMobileApp(mobileApp));
  const results = (await Promise.all(normalizedMobileApps)).sort(
    (a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()
  );
  return results;
};

let _mobileApps: Array<MobileApp>;
export const fetchMobileApps = async (): Promise<Array<MobileApp>> => {
  if (!_mobileApps) {
    _mobileApps = await load();
  }
  return _mobileApps;
};

export const getStaticPathsMobileAppList = async ({ paginate }) => {
  return paginate(await fetchMobileApps(), {
    params: { mobileApp: MOBILE_APP_BASE || undefined },
    pageSize: mobileAppPostsPerPage,
  });
};

export const getStaticPathsMobileAppPost = async () => {
  return (await fetchMobileApps()).flatMap((mobileApp) => ({
    params: {
      mobileApp: mobileApp.permalink,
    },
    props: { mobileApp },
  }));
};
