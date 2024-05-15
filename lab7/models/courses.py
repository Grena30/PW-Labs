from models.database import db


class Courses(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    description2 = db.Column(db.String(255), nullable=False)
    description3 = db.Column(db.String(255), nullable=False)
    img = db.Column(db.String(255), nullable=False)
    img_dialog = db.Column(db.String(255), nullable=False)
    
    def __init__(self, title, description, level, description2, description3, img, img_dialog):
        self.title = title
        self.description = description
        self.level = level
        self.description2 = description2
        self.description3 = description3
        self.img = img
        self.img_dialog = img_dialog
