import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function Marquee({ direction, pauseOnHover, reverse, fade, className, innerClassName, children, }: {
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    className?: string;
    innerClassName?: string;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { Marquee };
