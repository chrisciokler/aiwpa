import { ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  children?: ReactNode;
  className?: string;
};
export const Section = (props: Props) => {
  return <section className={clsx(`section`, props.className)}>{props.children}</section>;
};
