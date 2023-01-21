import { ReactNode } from "react";

export interface IChildren {
  children?: ReactNode;
}

export interface IPage extends IChildren {
  localeUrl?: String;
}
