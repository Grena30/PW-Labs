import React, { useEffect, useState } from 'react';
import '../css/Courses.css';
import linear_algebra from '../img/courses/linear_algebra.png';
import algebra_1 from '../img/courses/algebra_1.png';
import algebra_2 from '../img/courses/algebra_2.png';
import calculus from '../img/courses/calculus.png';
import multivariable_calculus from '../img/courses/multivariable_calculus.png';
import trigonometry from '../img/courses/trigonometry.png';
import linear_algebra_dialog from '../img/coursesDialog/linear_algebra.png';
import trigonometry_dialog from '../img/coursesDialog/trigonometry.png';
import calculus_dialog from '../img/coursesDialog/calculus.png';
import algebra_1_dialog from '../img/coursesDialog/algebra_1.png';
import algebra_2_dialog from '../img/coursesDialog/algebra_2.png';
import multivariable_calculus_dialog from '../img/coursesDialog/multivariable_calculus.png';
import CoursesDialog from './CoursesDialog';
import StarIcon from '@mui/icons-material/Star';


const coursesData = [
  {
    img: linear_algebra,
    img_dialog: linear_algebra_dialog,
    alt: "Linear Algebra",
    title: "Linear Algebra",
    description: "Explore the fundamentals of linear algebra, including vectors, matrices, and linear transformations.",
    level: 3,
    description2: "Linear algebra usually starts with the study of vectors, which are understood as quantities having both magnitude and direction. Vectors lend themselves readily to physical applications. For example, consider a solid object that is free to move in any direction. When two forces act at the same time on this object, they produce a combined effect that is the same as a single force. To picture this, represent the two forces v and w as arrows; the direction of each arrow gives the direction of the force, and its length gives the magnitude of the force. The single force that results from combining v and w is called their sum, written v + w. In the figure, v + w corresponds to the diagonal of the parallelogram formed from adjacent sides represented by v and w. This parallelogram rule for adding vectors is a fundamental concept in linear algebra.",
    description3: "Vectors are often expressed using coordinates. For example, in two dimensions a vector can be defined by a pair of coordinates (a1, a2) describing an arrow going from the origin (0, 0) to the point (a1, a2). If one vector is (a1, a2) and another is (b1, b2), then their sum is (a1 + b1, a2 + b2); this gives the same result as the parallelogram (see the figure). In three dimensions a vector is expressed using three coordinates (a1, a2, a3), and this idea extends to any number of dimensions."
  },
  {
    img: algebra_1,
    img_dialog: algebra_1_dialog,
    alt: "Algebra 1",
    title: "Algebra 1",
    description: "Master the basics of algebra, including equations, inequalities, and polynomials.",
    level: 1,
    description2: "Elementary algebra, also referred to as school algebra, college algebra, and classical algebra, is the oldest and most basic form of algebra. It is a generalization of arithmetic that relies on the use of variables and examines how mathematical statements may be transformed. Arithmetic is the study of numerical operations and investigates how numbers are combined and transformed using arithmetic operations like addition, subtraction, multiplication, and division. For example, the operation of addition combines two numbers, called the addends, into a third number, called the sum, as in 2 + 5 = 7. Elementary algebra relies on the same operations while allowing variables in addition to regular numbers. Variables are symbols for unspecified or unknown quantities. They make it possible to state relationships for which one does not know the exact values and to express general laws that are true, independent of which numbers are used. For example, the equation 2 × 3 = 3 × 2 belongs to arithmetic and expresses an equality only for these specific numbers. By replacing the numbers with variables, it is possible to express a general law that applies to any possible combinations of numbers, like the principle of commutativity expressed in the equation a × b = b × a.",
    description3: "Algebraic expressions are formed by using arithmetic operations to combine variables and numbers. By convention, the lowercase letters x, y and z represent variables. In some cases, subscripts are added to distinguish variables, as in x1, x2, and x3. The lowercase letters a, b, and c are usually used for constants and coefficients. For example, the expression 5 x + 3 is an algebraic expression created by multiplying the number 5 with the variable x and adding the number 3 to the result."
  },
  {
    img: algebra_2,
    img_dialog: algebra_2_dialog,
    alt: "Algebra 2",
    title: "Algebra 2",
    description: "Learn intermediate algebra topics, including factoring, quadratic equations, and rational expressions.",
    level: 2,
    description2: "The main objective of elementary algebra is to determine for which values a statement is true. Techniques to transform and manipulate statements are used to achieve this. A key principle guiding this process is that whatever operation is applied to one side of an equation also needs to be done to the other side of the equation. For example, if one subtracts 5 from the left side of an equation one also needs to subtract 5 from the right side of the equation to balance both sides. The goal of these steps is usually to isolate the variable one is interested in on one side, a process known as solving the equation for that variable. For example, the equation x − 7 = 4 can be solved for x by adding 7 to both sides, which isolates x on the left side and results in the equation x = 11.",
    description3: "There are many other techniques used to solve equations. Simplification is employed to replace a complicated expression with an equivalent simpler one. For example, the expression 7x − 3x  can be replaced with the expression 4x. Factorization is used to rewrite an expression as a product of several factors. This technique is common for polynomials to determine for which values the expression is zero. For example, the polynomial x^2 − 3x − 10 can be factorized as ( x + 2 ) ( x − 5 ). The polynomial as a whole is zero if and only if one of its factors is zero, i.e., if x is either −2 or 5. For statements with several variables, substitution is a common technique to replace one variable with an equivalent expression that does not use this variable. For example, if one knows that y = 3x then one can simplify the expression 7xy to arrive at 21 x 2. In a similar way, if one knows the exact value of one variable one may be able to use it to determine the value of other variables."
  },
  {
    img: trigonometry,
    img_dialog: trigonometry_dialog,
    alt: "Trigonometry",
    title: "Trigonometry",
    description: "Study the relationships between the sides and angles of triangles, and learn how to apply them to real-world problems.",
    level: 2,
    description2: "Trigonometry (from Ancient Greek τρίγωνον (trígōnon) 'triangle', and μέτρον (métron) 'measure') is a branch of mathematics concerned with relationships between angles and side lengths of triangles. In particular, the trigonometric functions relate the angles of a right triangle with ratios of its side lengths. The field emerged in the Hellenistic world during the 3rd century BC from applications of geometry to astronomical studies. The Greeks focused on the calculation of chords, while mathematicians in India created the earliest-known tables of values for trigonometric ratios (also called trigonometric functions) such as sine. Throughout history, trigonometry has been applied in areas such as geodesy, surveying, celestial mechanics, and navigation.",
    description3: "Trigonometry is known for its many identities. These trigonometric identities are commonly used for rewriting trigonometrical expressions with the aim to simplify an expression, to find a more useful form of an expression, or to solve an equation. Trigonometric ratios are the ratios between edges of a right triangle. These ratios depend only on one acute angle of the right triangle, since any two right triangles with the same acute angle are similar. So, these ratios define functions of this angle that are called trigonometric functions. Explicitly, they are defined below as functions of the known angle A, where a, b and h refer to the lengths of the sides in the accompanying figure. Sine (denoted sin), defined as the ratio of the side opposite the angle to the hypotenuse. Cosine (denoted cos), defined as the ratio of the adjacent leg (the side of the triangle joining the angle to the right angle) to the hypotenuse. Tangent (denoted tan), defined as the ratio of the opposite leg to the adjacent leg."
  },
  {
    img: calculus,
    img_dialog: calculus_dialog,
    alt: "Calculus",
    title: "Calculus",
    description: "Master the basics of calculus, including limits, derivatives, and integrals.",
    level: 3,
    description2: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape, and algebra is the study of generalizations of arithmetic operations. Originally called infinitesimal calculus or the calculus of infinitesimals, it has two major branches, differential calculus and integral calculus. The former concerns instantaneous rates of change, and the slopes of curves, while the latter concerns accumulation of quantities, and areas under or between curves. These two branches are related to each other by the fundamental theorem of calculus. They make use of the fundamental notions of convergence of infinite sequences and infinite series to a well-defined limit.",
    description3: "Infinitesimal calculus was developed independently in the late 17th century by Isaac Newton and Gottfried Wilhelm Leibniz. Later work, including codifying the idea of limits, put these developments on a more solid conceptual footing. Today, calculus has widespread uses in science, engineering, and social science. In mathematics education, calculus denotes courses of elementary mathematical analysis, which are mainly devoted to the study of functions and limits. The word calculus is Latin for small pebble (the diminutive of calx, meaning stone), a meaning which still persists in medicine. Because such pebbles were used for counting out distances, tallying votes, and doing abacus arithmetic, the word came to mean a method of computation. In this sense, it was used in English at least as early as 1672, several years before the publications of Leibniz and Newton."
  },
  {
    img: multivariable_calculus,
    img_dialog: multivariable_calculus_dialog,
    alt: "Multivariable Calculus",
    title: "Multivariable Calculus",
    description: "Learn advanced calculus topics, including partial derivatives, multiple integrals, and vector calculus.",
    level: 4,
    description2: "Multivariable calculus (also known as multivariate calculus) is the extension of calculus in one variable to calculus with functions of several variables: the differentiation and integration of functions involving multiple variables (multivariate), rather than just one. Multivariable calculus may be thought of as an elementary part of advanced calculus. For advanced calculus, see calculus on Euclidean space. The special case of calculus in three dimensional space is often called vector calculus.",
    description3: "In single-variable calculus, operations like differentiation and integration are made to functions of a single variable. In multivariate calculus, it is required to generalize these to multiple variables, and the domain is therefore multi-dimensional. Care is therefore required in these generalizations, because of two key differences between 1D and higher dimensional spaces: There are infinite ways to approach a single point in higher dimensions, as opposed to two (from the positive and negative direction) in 1D; There are multiple extended objects associated with the dimension; for example, for a 1D function, it must be represented as a curve on the 2D Cartesian plane, but a function with two variables is a surface in 3D, while curves can also live in 3D space."
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
          {favourites.includes(course.title) && <div className="star-icon"><StarIcon /></div>}
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