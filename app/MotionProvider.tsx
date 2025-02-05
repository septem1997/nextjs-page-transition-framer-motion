"use client";

import { LazyMotion } from "framer-motion";

import type { ReactNode } from "react";
import { memo } from "react";

export const FramerMotionProvider = memo(({ children, max = false }: { children?: ReactNode; max?: boolean }) => {
    return (
        <LazyMotion
            features={() => {
                return import("framer-motion").then((m) => m.domMax);
            }}
            strict
        >
            {children}
        </LazyMotion>
    );
});

FramerMotionProvider.displayName = "FramerMotionProvider";
