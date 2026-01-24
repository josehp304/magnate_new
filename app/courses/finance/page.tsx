import React from 'react';
import BtnLink from '@/components/BtnLink/BtnLink';
import Footer from '@/components/Footer/Footer';
import { ArrowUpRight, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';

export const metadata = {
    title: "Finance Mastery Course | Magnate",
    description: "Launch your career in finance with our comprehensive job-oriented course.",
};

export default function FinanceCoursePage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-white/10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc22a] rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl z-10">
                    <div className="inline-block px-4 py-1.5 border border-[#ffc22a]/30 rounded-full bg-[#ffc22a]/5 text-[#ffc22a] text-sm font-mono tracking-wider mb-6">
                        FINANCE CAREER PROGRAM
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
                        Master the Art of <br />
                        <span className="text-[#ffc22a]">Financial Growth</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10">
                        A comprehensive program designed to transform beginners into finance professionals.
                        Learn financial modeling, valuation, and investment strategies from industry experts.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <BtnLink label="Enroll Now" route="/enroll" dark={false} />
                        <BtnLink label="View Syllabus" route="/syllabus" dark={true} />
                    </div>
                </div>
            </section>

            {/* 2. What you will learn */}
            <section className="px-6 md:px-12 py-24 border-b border-white/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6">What you will learn</h2>
                            <p className="text-lg text-white/50">
                                Our curriculum is designed to make you industry-ready from day one.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    "Financial Modeling & Analysis",
                                    "Investment Banking Fundamentals",
                                    "Corporate Finance & Strategy",
                                    "Equity Research & Valuation",
                                    "Portfolio Management",
                                    "Risk Management Fundamentals",
                                    "Excel & Power BI for Finance",
                                    "Financial Statement Analysis"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#ffc22a]/30 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-[#ffc22a] shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Who can apply */}
            <section className="px-6 md:px-12 py-24 border-b border-white/10 bg-white/2">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="w-16 h-16 bg-[#ffc22a] rounded-2xl flex items-center justify-center mb-8 text-black">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium mb-6">Who can apply?</h2>
                            <p className="text-lg text-white/60 mb-8 max-w-lg">
                                This program is open to individuals passionate about finance and looking to fast-track their careers.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Final year students (Commerce/BBA/MBA)",
                                    "Fresh graduates looking for jobs",
                                    "Working professionals wanting to switch to core finance",
                                    "CA/CFA aspirants seeking practical exposure"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-lg">
                                        <div className="w-2 h-2 rounded-full bg-[#ffc22a]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 relative">
                            {/* Decorative elements representing eligibility */}
                            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-[#ffc22a]/20 to-transparent border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity"></div>
                                <div className="relative z-10 glass-card p-6 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md">
                                    <span className="text-2xl font-mono text-[#ffc22a]">No prior experience required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Career Outcomes */}
            <section className="px-6 md:px-12 py-24 border-b border-white/10">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium mb-6">Career Outcomes</h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Upon completion, you will be qualified for various high-demand roles in the financial sector.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { title: "Financial Analyst", Icon: Briefcase },
                        { title: "Investment Banker", Icon: ArrowUpRight },
                        { title: "Equity Researcher", Icon: Award },
                        { title: "Risk Manager", Icon: CheckCircle2 },
                        { title: "Credit Analyst", Icon: Briefcase },
                        { title: "Portfolio Manager", Icon: ArrowUpRight },
                        { title: "Wealth Manager", Icon: Award },
                        { title: "Corporate Finance Associate", Icon: CheckCircle2 },
                    ].map((role, index) => (
                        <div key={index} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#ffc22a] hover:text-black transition-all duration-300">
                            <div className="mb-4 text-[#ffc22a] group-hover:text-black transition-colors">
                                <role.Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-medium">{role.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Certifications */}
            <section className="px-6 md:px-12 py-24 bg-[#ffc22a] text-black border-b border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 border border-black/30 rounded-full bg-black/5 text-black text-sm font-mono tracking-wider mb-6">
                            INDUSTRY RECOGNIZED
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
                            Earn Your <br />
                            Certification
                        </h2>
                        <p className="text-xl text-black/70 mb-8 max-w-lg">
                            Get certified by Magnate and validated by top industry partners. Boost your LinkedIn profile and resume.
                        </p>
                        <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-all flex items-center gap-2">
                            View Sample Certificate <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-lg bg-white p-2 rounded-xl shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-500">
                            <div className="border border-gray-200 p-8 rounded-lg h-[300px] flex flex-col justify-between bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                                <div className="flex justify-between items-start">
                                    <div className="text-2xl font-bold tracking-widest text-[#1a1a1a]">MAGNATE</div>
                                    <Award className="w-12 h-12 text-[#cca000]" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Certificate of Completion</p>
                                    <h3 className="text-3xl font-serif text-gray-900">Finance Mastery</h3>
                                </div>
                                <div className="flex justify-between items-end border-t border-gray-300 pt-4">
                                    <div>
                                        <div className="h-10 w-24 bg-contain bg-no-repeat bg-center opacity-80" />
                                        {/* Signature placeholder */}
                                        <p className="text-xs text-gray-400 mt-1">Director&apos;s Signature</p>
                                    </div>
                                    <div className="text-xs text-gray-400">ID: MAG-2025-FIN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Footer */}
            <section className="px-6 md:px-12 py-32 text-center bg-[#1a1a1a]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-medium mb-8">Ready to start your financial journey?</h2>
                    <p className="text-xl text-white/50 mb-12">
                        Join thousands of successful graduates who have transformed their careers with Magnate.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <BtnLink label="Enroll Now" route="/enroll" dark={false} />
                        <BtnLink label="Download Syllabus" route="/syllabus" dark={true} />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
