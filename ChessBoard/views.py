from flask import render_template
from flask_classy import FlaskView, route
from ChessBoard.controller import ChessBoardController


class View(FlaskView):
    def __init__(self):
        self.controller = ChessBoardController()

    @route('/')
    def index(self):
        return render_template('index.html')

    # Returns dictionary of two random colors in hexadecimal
    @route('/rand', methods=['POST'])
    def rand(self):
        color1 = self.controller.rand_hex()
        color2 = self.controller.rand_hex()
        while color1 == color2:
            color2 = self.controller.rand_hex()
        colors = {
            'color1': color1,
            'color2': color2
        }
        return colors
