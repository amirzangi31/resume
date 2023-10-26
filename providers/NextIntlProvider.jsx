"use client"
import React from "react";
import { NextIntlClientProvider } from "next-intl";

const NextIntlProvider = async ({ children , local }) => {
    
    let messages;
    try {
      messages = (await import(`../messages/${local}.json`)).default;
    } catch (error) {
      notFound();
    }
  return (
    <NextIntlClientProvider
      locale={local}
      messages={messages}
    >
        {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;
