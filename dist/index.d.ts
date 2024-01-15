import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function Marquee({ children, direction, pauseOnHover, reverse, fade, className, innerClassName, numberOfCopies, }: {
    children: ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    className?: string;
    innerClassName?: string;
    numberOfCopies?: number;
}): react_jsx_runtime.JSX.Element;

export { Marquee };
