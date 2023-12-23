"use client";

import { Provider } from "react-redux";
import store from ".";

type ProvidersProps = {
  children: React.ReactNode;
};

export function ReduxProviders({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
