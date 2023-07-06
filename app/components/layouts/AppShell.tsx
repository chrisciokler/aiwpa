import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children?: ReactNode;
  withoutFooter?: boolean;
};
export const AppShell = (props: Props) => (
  <>
    <Header />
    <main className="flex w-full flex-col">{props.children}</main>
    {!props.withoutFooter && <Footer />}
  </>
);
