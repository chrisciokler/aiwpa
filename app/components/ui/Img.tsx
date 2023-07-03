import { CDN_URL } from '@/constants';
import { ImageSettings, imagecdn } from '@/lib/image-helpers';
import clsx from 'clsx';
import Image from 'next/image';

export interface ImgProps {
  onClick?: () => void;
  className?: string;
  noCdn?: boolean;
  imageStyles?: string;
  options?: ImageSettings;
  alt: string;
  src: string;
}

export const Img = (props: ImgProps) => {
  const { onClick, noCdn, imageStyles, options, alt, src, ...boxprops } = props;

  const cdn = options ? imagecdn(src, options) : src;
  const url = noCdn ? src : cdn;
  return (
    <div className={clsx(props?.className, 'relative overflow-hidden')}>
      <Image
        className={clsx('object-cover w-full aspect-auto', imageStyles)}
        alt={alt}
        onClick={onClick}
        unoptimized
        loader={({ src }) => src}
        sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
        fill
        placeholder="blur"
        blurDataURL={`https://images.weserv.nl/?url=${props.src}&w=50&q=10&blur=10`}
        src={url}
      />
    </div>
  );
};