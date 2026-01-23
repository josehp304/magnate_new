import React from 'react';
import Hero from '../../components/courses/Hero';
import CourseList from '../../components/courses/CourseList';
import Partners from '../../components/courses/Partners';
import SuccessStories from '../../components/courses/SuccessStories';
import Investors from '../../components/courses/Investors';
import Footer from '../../components/Footer/Footer';

export const metadata = {
    title: "Courses | Magnate",
    description: "Explore our wide range of job-oriented courses.",
};

const CoursesPage = () => {
    return (
        <main className="w-full bg-white relative">
            <Hero />
            <CourseList />
            <Partners />
            <SuccessStories />
            <Investors />
            <Footer />
        </main>
    );
};

export default CoursesPage;
