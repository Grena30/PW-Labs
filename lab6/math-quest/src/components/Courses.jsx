import React, { useEffect, useState } from 'react';
import '../css/Courses.css';
import linear_algebra from '../img/courses/brilliant_img_1.png';
import algebra_1 from '../img/courses/brilliant_img_2.png';
import algebra_2 from '../img/courses/brilliant_img_3.png';
import algebra_3 from '../img/courses/brilliant_img_4.png';
import calculus from '../img/courses/brilliant_img_5.png';
import multivariable_calculus from '../img/courses/brilliant_img_6.png';
import vectors from '../img/courses/brilliant_img_7.png';
import CoursesDialog from './CoursesDialog';
import StarIcon from '@mui/icons-material/Star';


const coursesData = [
    {
      img: linear_algebra,
      alt: "Linear Algebra",
      title: "Linear Algebra",
      description: "Explore the fundamentals of linear algebra, including vectors, matrices, and linear transformations.",
      level: 3,
      description2: "Linear algebra usually starts with the study of vectors, which are understood as quantities having both magnitude and direction. Vectors lend themselves readily to physical applications. For example, consider a solid object that is free to move in any direction. When two forces act at the same time on this object, they produce a combined effect that is the same as a single force. To picture this, represent the two forces v and w as arrows; the direction of each arrow gives the direction of the force, and its length gives the magnitude of the force. The single force that results from combining v and w is called their sum, written v + w. In the figure, v + w corresponds to the diagonal of the parallelogram formed from adjacent sides represented by v and w. This parallelogram rule for adding vectors is a fundamental concept in linear algebra.",
      description3: "Vectors are often expressed using coordinates. For example, in two dimensions a vector can be defined by a pair of coordinates (a1, a2) describing an arrow going from the origin (0, 0) to the point (a1, a2). If one vector is (a1, a2) and another is (b1, b2), then their sum is (a1 + b1, a2 + b2); this gives the same result as the parallelogram (see the figure). In three dimensions a vector is expressed using three coordinates (a1, a2, a3), and this idea extends to any number of dimensions."
    },
    {
      img: algebra_1,
      alt: "Algebra 1",
      title: "Algebra 1",
      description: "Master the basics of algebra, including equations, inequalities, and polynomials.",
      level: 1,
      description2: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. Just as sentences describe relationships between specific words, in algebra, equations describe relationships between variables. Algebra's main goal is to solve for the unknown variable, which is usually denoted by a letter at the end of the alphabet, such as x, y, or z."
    },
    {
        img: algebra_2,
        alt: "Algebra 2",
        title: "Algebra 2",
        description: "Learn intermediate algebra topics, including factoring, quadratic equations, and rational expressions.",
        level: 2,
        description2: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. Just as sentences describe relationships between specific words, in algebra, equations describe relationships between variables. Algebra's main goal is to solve for the unknown variable, which is usually denoted by a letter at the end of the alphabet, such as x, y, or z."
    },
    {
        img: algebra_3,
        alt: "Algebra 3",
        title: "Algebra 3",
        description: "Explore advanced algebra topics, including logarithms, functions, and conic sections.",
        level: 4,
        description2: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. Just as sentences describe relationships between specific words, in algebra, equations describe relationships between variables. Algebra's main goal is to solve for the unknown variable, which is usually denoted by a letter at the end of the alphabet, such as x, y, or z."
    },
    {
        img: calculus,
        alt: "Calculus",
        title: "Calculus",
        description: "Master the basics of calculus, including limits, derivatives, and integrals.",
        level: 3,
        description2: "Calculus is a branch of mathematics that studies continuous change. It has two major branches: differential calculus and integral calculus. These two branches are related to each other by the fundamental theorem of calculus. Both branches make use of the fundamental notions of convergence of infinite sequences and infinite series to a well-defined limit."
    },
    {
        img: multivariable_calculus,
        alt: "Multivariable Calculus",
        title: "Multivariable Calculus",
        description: "Learn advanced calculus topics, including partial derivatives, multiple integrals, and vector calculus.",
        level: 5,
        description2: "Calculus is a branch of mathematics that studies continuous change. It has two major branches: differential calculus and integral calculus. These two branches are related to each other by the fundamental theorem of calculus. Both branches make use of the fundamental notions of convergence of infinite sequences and infinite series to a well-defined limit."
    },
  ];


const Courses = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedCourse, setSelectedCourse] = React.useState(null);
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) || []);

    useEffect(() => {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);
  
    const handleClickOpen = (course) => {
      setSelectedCourse(course);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFavourite = (course) => {
      let favouritesFromStorage = JSON.parse(localStorage.getItem('favourites')) || [];
      if (favouritesFromStorage.includes(course.title)) {
        favouritesFromStorage = favouritesFromStorage.filter(title => title !== course.title);
      } else {
        favouritesFromStorage.push(course.title);
      }
      localStorage.setItem('favourites', JSON.stringify(favouritesFromStorage));
      setFavourites(favouritesFromStorage);
    };

    const sortedCourses = [...coursesData].sort((a, b) => favourites.includes(b.title) - favourites.includes(a.title));

  return (
    <section id="courses" className="section courses">
    <h2 className='courses-title'>Courses</h2>
    <div className="courses-container">
      {sortedCourses.map((course, index) => (
        <div key={index} className="course-card" onClick={() => handleClickOpen(course)}>
          {favourites.includes(course.title) && <StarIcon />}
          <img src={course.img} alt={course.alt} />
          <h3>{course.title}</h3>
          <p className='course-description'>{course.description}</p>
          <div className={`course-level level-${course.level}`}>
            Level: {course.level}
          </div>
        </div>
      ))}
    </div>
    <CoursesDialog
        open={open}
        handleClose={handleClose}
        course={selectedCourse}
        handleFavourite={handleFavourite}
    />
    </section>


  );
}

export default Courses;