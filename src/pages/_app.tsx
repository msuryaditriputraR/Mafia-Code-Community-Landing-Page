import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component className="font-inter scrollbar-hide" {...pageProps} />;
};

export default api.withTRPC(MyApp);
