import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, ReactNode } from 'react';

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    innerClassName?: string;
    numberOfCopies?: number;
};
declare function Marquee({ children, direction, pauseOnHover, reverse, fade, className, innerClassName, numberOfCopies, ...rest }: MarqueeProps): react_jsx_runtime.JSX.Element;

export { Marquee, type MarqueeProps };
