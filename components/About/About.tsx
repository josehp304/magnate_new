"use client";
import "./About.css";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCopy from "../AnimatedCopy";
import BlockCopy from "../BlockCopy/BlockCopy";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const quote =
        "In prestige beauty, the brands redefining the space are taking a social-first approach - leveraging the power of social and influence to build community, deepen loyalty, drive sales, and create enduring brand equity.";

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const signature = containerRef.current.querySelector(".about-signature");
            const label = containerRef.current.querySelector(".about-label");

            gsap.set(signature, { opacity: 0, y: 20 });
            gsap.set(label, { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(label, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }).to(
                signature,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="about-section" ref={containerRef}>
            <div className="about-label">
                <p>Who We Are</p>
            </div>

            <div className="about-quote">
                <h2>
                    <AnimatedCopy colorInitial="#7f5515ff" colorAccent="#dbb22bff" colorFinal="#000000">
                        {quote}
                    </AnimatedCopy>
                    {/* <BlockCopy>
                        <p>
                            {quote}

                        </p>
                    </BlockCopy> */}
                </h2>
            </div>

            <div className="about-signature">
                {/* Simulated Signature SVG for "Renee" style */}
                <svg
                    className="signature-svg"
                    viewBox="0 0 200 80"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M40,50 C40,50 50,20 70,30 C90,40 60,60 50,55 C40,50 90,30 110,40 C130,50 120,60 120,60 M130,30 L130,70" />
                </svg>
                <div className="about-signature-name">
                    <p>Ashwin Pradeep</p>
                    <p>FOUNDER & CEO</p>
                </div>
            </div>
        </section>
    );
};

export default About;
