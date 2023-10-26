import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NextIntlClientProvider } from "next-intl";

const Layout = async ({ children, local }) => {
  let messages;
  try {
    messages = (await import(`../../messages/${local}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={local} messages={messages}>
      <Header />
      <main>
        <div className="container mx-auto p-4">{children}</div>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
};

export default Layout;
