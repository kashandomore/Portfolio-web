import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../Navbar";
//@ts-ignore
import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

type Props = {
  children?: ReactNode;
  title?: string;
  home?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  home,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar/>
    <main className="min-h-screen">{children}</main>
      <div className="fixed">
      <WhatsAppWidget
          phoneNumber="+923278013011"
          message="Hey! 👋🏼 How can I help you?"
          companyName="Syed Kashan Shah"
          replyTimeText="Frontend Developer"
          sendButton="Let's Go!"
        />
      </div>
  </div>
);

export default Layout;
