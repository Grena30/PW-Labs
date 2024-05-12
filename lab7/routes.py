from flask import request, jsonify
from models.database import db
from models.courses import Courses
from __main__ import app
from flask import request, jsonify
from app import authenticate
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token


def admin_required(fn):
    def wrapper(*args, **kwargs):
        current_user = get_jwt_identity()
        if current_user != 'admin':
            return jsonify({"error": "Admin access required"}), 401
        return fn(*args, **kwargs)
    return wrapper

@app.route('/api/token', methods=['POST'])
def get_token():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username and password:
        if authenticate(username, password):
            access_token = create_access_token(identity=username)
            return jsonify({'Bearer': access_token}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401
    else:
        return jsonify({'error': 'Username and password required'}), 400

@app.route('/api/courses', methods=['POST'])
@jwt_required()
def create_courses():
    try:
        data = request.get_json()

        title = data['title']
        description = data['description']
        level = data['level']
        description2 = data['description2']
        description3 = data['description3']
        
        token = request.headers.get('Authorization').split(' ')[1]

        courses = Courses(title, description, level, description2, description3)

        db.session.add(courses)
        db.session.commit()

        return jsonify({"message": "Course created successfully"}), 201

    except KeyError:
        return jsonify({"error": "Invalid request data"}), 400


@app.route('/api/courses', methods=['GET'])
def get_courses():
    courses = Courses.query.all()
    courses_list = []
    for course in courses:
        courses_list.append({
            "title": course.title,
            "description": course.description,
            "level": course.level,
            "description2": course.description2,
            "description3": course.description3
        })
    return jsonify(courses_list), 200


@app.route('/api/courses/<int:course_id>', methods=['GET'])
def get_courses_by_id(course_id):
    course = Courses.query.get(course_id)
    if course is not None:
        return jsonify({
            "title": course.title,
            "description": course.description,
            "level": course.level,
            "description2": course.description2,
            "description3": course.description3
        }), 200
    else:
        return jsonify({"error": "Course not found"}), 404


@app.route('/api/courses/<int:course_id>', methods=['PUT'])
@jwt_required()
def update_courses(course_id):
    try:
        course = Courses.query.get(course_id)

        if course is not None:

            data = request.get_json()

            course.title = data.get('title', course.title)
            course.description = data.get('description', course.description)
            course.level = data.get('level', course.level)
            course.description2 = data.get('description2', course.description2)
            course.description3 = data.get('description3', course.description3)
            db.session.commit()

            return jsonify({"message": "Course updated successfully"}), 200

        else:
            return jsonify({"error": "Course not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/courses/<int:course_id>', methods=['DELETE'])
@jwt_required()
@admin_required
def delete_courses(course_id):
    try:
        course = Courses.query.get(course_id)
        if course is not None:
            db.session.delete(course)
            db.session.commit()
            return jsonify({"message": "Course deleted successfully"}), 200
        else:
            return jsonify({"error": "Course not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500
