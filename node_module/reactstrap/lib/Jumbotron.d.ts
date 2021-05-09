import * as React from 'react';
import { CSSModule } from './index';

export interface JumbotronProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  fluid?: boolean;
  cssModule?: CSSModule;
}

declare class Jumbotron extends React.Component<JumbotronProps> {}
export default Jumbotron;
