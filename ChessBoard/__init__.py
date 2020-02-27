from flask import Flask
from ChessBoard.views import View

app = Flask(__name__)


View.register(app)

