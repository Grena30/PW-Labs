import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import '../css/CoursesDialog.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CoursesDialog({ open, handleClose, course, handleFavourite }) {
  const [isFavourite, setIsFavourite] = React.useState(false);

  React.useEffect(() => {
    if (course) {
      const favouritesFromStorage = JSON.parse(localStorage.getItem('favourites')) || [];
      setIsFavourite(favouritesFromStorage.includes(course.title));
    }
  }, [course]);

    return (
      <React.Fragment>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          PaperProps={{
            style: { backgroundColor: 'var(--background-color)' },
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
            <div className='dialog-content'>
              <div className="info">
                <h3>{course.title}</h3>
                <p>{course.description2}</p>
                <p>{course.description3}</p>
                <div className={`dialog-level level-${course.level}`}>
                  Level: {course.level}
                </div>
                <button
                  className={`favourite-icon ${isFavourite ? 'pressed' : ''}`}
                  onClick={() => {
                    handleFavourite(course);
                    setIsFavourite(!isFavourite);
                  }}
                >
                  {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
                </button>
              </div>
              <div className="card">
                <img src={course.img} alt={course.alt} />
              </div>
            </div>
          )}
        </Dialog>
      </React.Fragment>
    );
  }
