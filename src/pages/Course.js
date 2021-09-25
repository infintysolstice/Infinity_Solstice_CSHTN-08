import React from 'react';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import SideBar from "../components/Sidebar";

const Course = () => {
    return (
        <div>
            <SideBar />
            <Header />
            <Quiz />
        </div>
    )
}

export default Course;
