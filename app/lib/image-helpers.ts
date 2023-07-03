import { CDN_URL } from '@/constants';

type Fit = 'inside' | 'cover' | 'outside' | 'fill' | 'contain';
type Age = '1d' | '1w' | '2w' | '1M' | '3M' | '6M' | '1y';
type Output = 'jpg' | 'png' | 'gif' | 'tiff' | 'webp';
type Alignment = 'center' | '[entropy,attention]';
export type ImageSettings = {
  q?: number;
  w?: number;
  fit?: Fit;
  age?: Age;
  a?: Alignment;
  out?: Output;
};
export const imagecdn = (src: string, settings: ImageSettings) => {
  const { q = 100, w = 1024, fit = 'inside', age = '1d', a = 'center', out = 'jpg' } = settings;
  ('&fit=cover&a=attention&output=jpg');
  const url = `${CDN_URL}${src}&q=${q}&w=${w}&fit=${fit}&maxage=${age}&a=${a}&output=${out}`;
  return url;
};
