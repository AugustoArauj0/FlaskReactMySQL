from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:LagoPuelo99@localhost:3306/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
import backend.views  # nopep8
