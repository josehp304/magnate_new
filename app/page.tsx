"use client";
import React, { useState, useEffect } from "react";
import "./home.css";

import DynamicBackground from "../components/DynamicBackground/DynamicBackground";
import Copy from "../components/Copy/Copy";
import BtnLink from "../components/BtnLink/BtnLink";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Footer from "../components/Footer/Footer";
import ProcessCards from "../components/ProcessCards/ProcessCards";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
try {
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
} catch (e) {
  console.warn("CustomEase failed to register", e);
}

import Preloader from "../components/Preloader/Preloader";

export default function Home() {
  useGSAP(() => {
    // Existing animations for Hero Link or other parts if needed
    // But since we are likely replacing the hero experience, we can keep the scroll triggers for sections below.
    const heroLink = document.querySelector(".hero-link");

    // Simple fade in for the old hero link if it's still there
    if (heroLink) {
      gsap.to(heroLink, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero",
          start: "top center",
        }
      });
    }
  }, []);

  return (
    <>
      <Preloader />

      {/* Existing content below */}
      <section className="hero" style={{ height: 'auto', minHeight: '100vh', display: 'none' }}>
        {/* Hidden old hero for now to focus on the new Preloader/Hero which takes 100vh */}
        {/* <DynamicBackground logoPath="/images/logos/logo_light.png" /> */}

        <div className="hero-content">
          <div className="hero-header">
            <div className="hero-header-col-lg"></div>
            <div className="hero-header-col-sm">
              <Copy animateOnScroll={false} delay={0}>
                <h3>
                  Systems thinking and creative execution brought into web
                  development for consistent outcomes.
                </h3>
              </Copy>
            </div>
          </div>

          <div className="hero-footer">
            <div className="hero-footer-col-lg">
              <Copy animateOnScroll={false} delay={0}>
                <p className="sm caps mono">Studios</p>
                <p className="sm caps mono">Toronto and Copenhagen</p>
              </Copy>
            </div>
            <div className="hero-footer-col-sm">
              <div className="hero-tags">
                <Copy animateOnScroll={false} delay={0}>
                  <p className="sm caps mono">Web Systems</p>
                  <p className="sm caps mono">Interface Design</p>
                  <p className="sm caps mono">Creative Development</p>
                  <p className="sm caps mono">End to End Delivery</p>
                </Copy>
              </div>

              <div className="hero-link">
                <BtnLink route="/contact" label="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kept other sections */}
      <WhoWeAre />
      <ProcessCards />
      <Footer />
    </>
  );
}
