import React from 'react';
import '../css/Courses.css';
import linear_algebra from '../img/courses/brilliant_img_1.png';
import algebra_1 from '../img/courses/brilliant_img_2.png';
import algebra_2 from '../img/courses/brilliant_img_3.png';
import algebra_3 from '../img/courses/brilliant_img_4.png';
import calculus from '../img/courses/brilliant_img_5.png';
import multivariable_calculus from '../img/courses/brilliant_img_6.png';
import vectors from '../img/courses/brilliant_img_7.png';


const Courses = () => {
  return (
    <section id="courses" className="section courses">
    <h2 className='courses-title'>Courses</h2>
    <div className="courses-container">
        <div className="course-card">
            <img src={linear_algebra} alt="Linear Algebra" />
            <h3>Linear Algebra</h3>
            <p>Explore the fundamentals of linear algebra, including vectors, matrices, and linear transformations.</p>
            <p>Level: 1</p>
            {/* <span class="bookmark-icon">&#9734;</span> */}
        </div>
        <div className="course-card">
            <img src={algebra_1} alt="Algebra 1" />
            <h3>Algebra 1</h3>
            <p>Master the basics of algebra, including equations, inequalities, and polynomials.</p>
            <p>Level: 1</p>
        </div>
        <div className="course-card">
            <img src={algebra_2} alt="Algebra 2" />
            <h3>Algebra 2</h3>
            <p>Advance your algebra skills with topics like functions, logarithms, and exponentials.</p>
            <p>Level: 2</p>
        </div>
        {/* <div className="course-card">
            <img src={algebra_3} alt="Algebra 3" />
            <h3>Algebra 3</h3>
            <p>Dive deeper into algebraic concepts such as sequences, series, and graphing.</p>
            <p>Level: 3</p>
        </div>
        <div className="course-card">
            <img src={calculus} alt="Calculus" />
            <h3>Calculus</h3>
            <p>Learn the principles of calculus, including limits, derivatives, and integrals.</p>
            <p>Level: 2</p>
        </div>
        <div className="course-card">
            <img src={multivariable_calculus} alt="Multivariable Calculus" />
            <h3>Multivariable Calculus</h3>
            <p>Extend your calculus knowledge to functions of multiple variables and vector calculus.</p>
            <p>Level: 3</p>
        </div>
        <div className="course-card">
            <img src={vectors} alt="Vectors" />
            <h3>Vectors</h3>
            <p>Study vectors in depth, covering vector spaces, dot products, and cross products.</p>
            <p>Level: 2</p>
        </div> */}
        {/* <!-- Add more course cards here --> */}
    </div>
    </section>


  );
}

export default Courses;