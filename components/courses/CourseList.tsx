import React from 'react';

const courses = [
    { title: "Montessori TTC", color: "#FFD700" },
    { title: "Full-Stack Web Development", color: "#FFD700" },
    { title: "Quantity Surveying", color: "#FFD700" },
    { title: "SAP FICO", color: "#FFD700" },
    { title: "Data Science", color: "#FFD700" },
    { title: "Digital Marketing", color: "#FFD700" },
    { title: "Business Accounting", color: "#FFD700" },
    { title: "MEP Design", color: "#FFD700" },
    { title: "Python Programming", color: "#FFD700" },
    { title: "Stock Market 360", color: "#FFD700" },
    { title: "Spoken English", color: "#FFD700" },
    { title: "German Language", color: "#FFD700" },
    { title: "Kerala PSC", color: "#FFD700" },
    { title: "Banking", color: "#FFD700" },
    { title: "Hospital Administration", color: "#FFD700" },
    { title: "Data Analytics", color: "#FFD700" },
];

const CourseList = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 text-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Decorative Header */}
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="absolute -top-8 -left-8 text-[#D4AF37] opacity-80 animate-pulse">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">In-Demand Courses</h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl">
                        You are just a course away from your dream career
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-4 bg-[#F5F5F7] p-4 rounded-xl hover:bg-black hover:text-[#D4AF37] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#D4AF37] shadow-sm hover:shadow-xl"
                        >
                            {/* Icon Placeholder */}
                            <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#333] flex items-center justify-center flex-shrink-0 transition-colors">
                                {/* Simple circle/icon representation */}
                                <div className="w-6 h-6 rounded-full border-2 border-[#D4AF37]"></div>
                            </div>

                            <span className="font-medium text-lg leading-tight">{course.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseList;
