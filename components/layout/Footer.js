"use client";

import React from "react";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";
import { useLocale, useTranslations } from "next-intl";
import { isRtlLang } from "rtl-detect";

function Footer() {
  const t = useTranslations("footer")
  const local = useLocale()
  const rtl = isRtlLang(local)

  return (
    <footer>
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center w-full">
            <Logo />
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <Navigation footer={true}  />
          </div>
          <div className="w-full text-center mt-5 ">
            <p>© {t("title")}<span className="text-white underline">{t("name")}</span></p> {rtl ?  <span>میباشد</span> : ""}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
