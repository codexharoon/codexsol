import React, { PropsWithChildren } from "react";

interface HomePageLayoutProps extends PropsWithChildren {}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return <div>{children}</div>;
};

export default HomePageLayout;
