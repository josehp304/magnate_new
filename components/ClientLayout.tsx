"use client";
import { useState } from "react";
import Menu from "./Menu/Menu";
import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isMobile] = useState(false);

    const scrollSettings = isMobile
        ? {
            duration: 1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
            lerp: 0.05,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        }
        : {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        };

    return (
        <ReactLenis root options={scrollSettings}>
            <Menu />
            {children}
        </ReactLenis>
    );
}
