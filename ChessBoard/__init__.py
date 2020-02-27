from flask import Flask
from ChessBoard.views import View

app = Flask(__name__)


# To connect the view to the init
View.register(app)

