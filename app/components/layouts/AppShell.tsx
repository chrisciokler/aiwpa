import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  withoutFooter?: boolean;
}
export const AppShell = (props: Props) => (
  <>
    <Header />
    <main className="flex flex-col w-full">
      {props.children}
    </main>
    {!props.withoutFooter && <Footer />}
  </>
)