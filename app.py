from flask import Flask, render_template
import random

app = Flask(__name__)


def populateTable():
    size = 8
    inner = ''
    row = True
    for i in size:
        inner += '<tr>'
        for j in size:
            if row:
                inner += '<td class="odd"></td>'
            else:
                inner += '<td class="even"></td>'
            row = not row

    return inner


@app.route('/')
def index():
    a = "hello world"
    return render_template('index.html', **locals())


@app.route('/rand', methods=['POST'])
def rand():
    options = ['white', 'black', 'red', 'yellow', 'blue', 'orange', 'purple', 'green', 'pink']

    num1 = random.randint(0, 8)
    num2 = random.randint(0, 8)
    while num2 == num1:
        num2 = random.randint(0, 8)

    colors = {
        'color1': options[num1],
        'color2': options[num2]
    }
    return colors


if __name__ == '__main__':
    app.run()
