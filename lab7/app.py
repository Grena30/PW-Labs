from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models.database import db
from flask_swagger_ui import get_swaggerui_blueprint
from models.courses import Courses
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_cors import CORS
from datetime import timedelta


def authenticate(username, password):
    users = {
        'writer': 'writer',
        'admin': 'admin'
    }
    if username in users and users[username] == password:
        return username

def identity(payload):
    user_id = payload['identity']
    return {'user_id': user_id}

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    db.init_app(app)
    return app


if __name__ == '__main__':
    app = create_app()
    app.config['JWT_SECRET_KEY'] = 'secret'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=1)
    jwt = JWTManager(app)
    SWAGGER_URL = "/swagger"
    API_URL = "/static/swagger.json"

    swagger_ui_blueprint = get_swaggerui_blueprint(
        SWAGGER_URL,
        API_URL,
        config={
            'app_name': 'Access API'
        }
    )
    app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)
    import routes
    app.run(port=6060, debug=True)
