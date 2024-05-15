import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import "../css/CoursesDialog.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CoursesDialog({
  token,
  open,
  handleClose,
  course,
}) {
  const handleFavourite = () => {
    if (course.favourite) {
      if (token) {
        handleDelete();
        handleClose();
      } else {
        alert("You need to have a token to remove a course from favourites.")
      }
    } else if (!course.favourite) {
      console.log(course);
      let min = 1;
      let max = 1000000;
      let newCourse = {
        id: Math.floor(Math.random() * (max - min + 1)) + min,
        title: course.title,
        description: course.description,
        level: course.level,
        description2: course.description2,
        description3: course.description3,
      };

      if (token) {
        handlePost(newCourse);
        handleClose();
      } else {
        alert("You need to have a token to add a course to favourites.")
      }
    }
  };

  const handlePost = (course) => {
    fetch("http://127.0.0.1:6060/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: course.id,  
        title: course.title,
        description: course.description,
        level: course.level,
        description2: course.description2,
        description3: course.description3,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
    });
  };

  const handleDelete = () => {
    fetch(`http://127.0.0.1:6060/api/courses/${course.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(token);
        console.log("Success:", data);
        if (data.msg === "Not enough segments") {
          alert("You are not authorized to delete this course.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: { backgroundColor: "var(--background-color)" },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        {course && (
          <div className="dialog-content">
            <div className="info">
              <h3>{course.title}</h3>
              <p>{course.description2}</p>
              <p>{course.description3}</p>
              <div className={`dialog-level level-${course.level}`}>
                Level: {course.level}
              </div>
              <button
                className={`favourite-icon ${
                  course.favourite ? "pressed" : ""
                }`}
                onClick={handleFavourite}
              >
                {course.favourite
                  ? "Remove from Favourites"
                  : "Add to Favourites"}
              </button>
            </div>
            <div className="card">
              <img src={course.img_dialog} alt={course.alt} />
            </div>
          </div>
        )}
      </Dialog>
    </React.Fragment>
  );
}
