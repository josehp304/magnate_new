import React from 'react';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import VisionMission from '../../components/VisionMission/VisionMission';

const AboutUsPage = () => {
    return (
        <main className="w-full bg-[#050505] text-white relative">
            {/* Simple Hero Section */}
            <section className="min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-12 text-center relative overflow-hidden">
                <div className="z-10 flex flex-col items-center gap-6">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">About Us</h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                        Redefining education through innovation, community, and excellence.
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>
            </section>

            {/* <WhoWeAre /> */}

            <VisionMission />



            <Footer />
        </main>
    );
};

export default AboutUsPage;
