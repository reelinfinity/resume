import { Children, ReactNode } from "react";

type renderType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (item: any, index: number): ReactNode;
};

type eachType = {
  render: renderType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  of: Array<any>;
};

export const Each = ({ render, of }: eachType) =>
  Children.toArray(of.map((item, index) => render(item, index)));
