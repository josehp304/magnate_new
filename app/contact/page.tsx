"use client";
import "./contact.css";
import React, { useRef, useState } from "react";

import Copy from "../../components/Copy/Copy";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContactPage = () => {
    const router = useTransitionRouter();
    const contactRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        course: "Course 1"
    });

    useGSAP(
        () => {
            if (!contactRef.current) return;
            // Animate Map Wrapper instead of .contact-img
            const mapWrapper = contactRef.current.querySelector(".contact-map-wrapper");
            const footerTexts = contactRef.current.querySelectorAll(
                ".contact-footer .footer-text"
            );

            gsap.set(mapWrapper, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            });

            gsap.to(mapWrapper, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 1,
                delay: 0.85,
                ease: "power3.out",
            });

            footerTexts.forEach((element) => {
                const textContent = element.querySelector(".footer-text-content");
                gsap.set(textContent, {
                    y: "100%",
                });
            });

            footerTexts.forEach((element, index) => {
                const textContent = element.querySelector(".footer-text-content");
                gsap.to(textContent, {
                    y: "0%",
                    duration: 0.8,
                    delay: 1.8 + index * 0.1,
                    ease: "power3.out",
                });
            });
        },
        { scope: contactRef }
    );

    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-30%) scale(0.90)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Temporary logic: Construct mailto link
        const subject = `Course Inquiry from ${formData.fullName}`;
        const body = `Name: ${formData.fullName}%0D%0APhone: ${formData.phone}%0D%0ACourse: ${formData.course}`;
        window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/1234567890", "_blank");
    };

    return (
        <div className="contact" ref={contactRef}>
            <div className="contact-map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4364866087533!2d-79.39486242385153!3d43.64981197110191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c56e29ac3d%3A0x6bba4f38e64cc392!2sRichmond%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1706100000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="contact-form-container">
                <div className="contact-header">
                    <Copy delay={1}>
                        <h1 className="header-title">Start Your Journey</h1>
                    </Copy>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <Copy delay={1.1}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Copy>

                    <Copy delay={1.2}>
                        <div className="form-group">
                            <label>Phone (Country Code)</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 234 567 8900"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Copy>

                    <Copy delay={1.3}>
                        <div className="form-group">
                            <label>Select Course</label>
                            <select name="course" title="Select Course" value={formData.course} onChange={handleChange}>
                                <option value="Course 1">Design Fundamentals</option>
                                <option value="Course 2">Advanced Development</option>
                                <option value="Course 3">Full Stack Pro</option>
                            </select>
                        </div>
                    </Copy>

                    <Copy delay={1.4}>
                        <button type="submit" className="submit-btn">
                            Submit Application
                        </button>
                    </Copy>
                </form>

                <div className="contact-actions">
                    <Copy delay={1.5}>
                        <button className="whatsapp-btn" onClick={handleWhatsApp}>
                            Chat on WhatsApp
                        </button>
                    </Copy>
                </div>
            </div>

            <div className="contact-footer">
                <div className="fc-col-lg">
                    <div className="footer-text">
                        <div className="footer-text-content">
                            <p className="sm caps">Developed by Codegrid</p>
                        </div>
                    </div>
                </div>
                <div className="fc-col-sm">
                    <div className="footer-text">
                        <div className="footer-text-content">
                            <p className="sm caps">&copy; 2025 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
