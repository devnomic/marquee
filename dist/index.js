"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Marquee: () => Marquee
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: cn(
        "group flex gap-[1rem] overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      ),
      style: {
        maskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0,
        WebkitMaskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0
      },
      ...rest,
      children: Array(numberOfCopies).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: cn(
            "flex justify-around gap-[1rem] [--gap:1rem] shrink-0",
            direction === "left" ? "animate-marquee-left flex-row" : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse",
            innerClassName
          ),
          children
        },
        i
      ))
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Marquee
});
//# sourceMappingURL=index.js.map