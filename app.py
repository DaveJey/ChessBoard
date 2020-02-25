from flask import Flask, render_template
import random


app = Flask(__name__)


def populate_table():
    size = 8
    inner = ''
    row = True
    for i in range(0, size):
        inner += '<tr>'
        for j in range(0, size):
            if row:
                inner += '<td class="odd box"></td>'
            else:
                inner += '<td class="even box"></td>'
            row = not row
        inner += '</tr>'
        row = not row
    return inner


@app.route('/')
def index():
    table = populate_table()
    return render_template('index.html', **locals())


def rand_hex():
    hex_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    hex_num = "#"
    for i in range(0, 6):
        hex_num += hex_list[random.randint(0, 15)]
    return hex_num


@app.route('/rand', methods=['POST'])
def rand():
    color1 = rand_hex()
    color2 = rand_hex()
    while color1 == color2:
        color2 = rand_hex()
    colors = {
        'color1': color1,
        'color2': color2
    }
    return colors


if __name__ == '__main__':
    app.run()
