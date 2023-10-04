"use client";
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Navbar from "@/components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

 


const inter = Inter({ subsets: ["latin"] });


const initBotpress = () =>{
  window.botpressWebChat.init({
    "composerPlaceholder": "escreva aqui",
    "botConversationDescription": "o melhor chatbot de Portugal",
    "botId": "14ea4229-d163-4103-80cf-407901cdb561",
    "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
    "messagingUrl": "https://messaging.botpress.cloud",
    "clientId": "14ea4229-d163-4103-80cf-407901cdb561",
    "lazySocket": true,
    "botName": "Assitente Virtual",
    "avatarUrl": "https://cdn3.iconfinder.com/data/icons/artificial-intelligence-93/60/robot__message__robotics__artificial__intelligence-256.png",
   "frontendVersion": "v0",
    "useSessionStorage": true
});


}
export default async function RootLayout({ children, params: {locale} }) {


  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
     <head>
      
      <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"
      onLoad={()=>{
        initBotpress();
      }}
      />
     </head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
         {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );

  
}

