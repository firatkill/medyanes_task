"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "@/Containers/MainContainer/MainContainer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import ModalWrapper from "@/Components/ModalWrapper/ModalWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <MainContainer>
            {children}
            <ModalWrapper />
          </MainContainer>
        </Provider>
      </body>
    </html>
  );
}
