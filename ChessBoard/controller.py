import random


class ChessBoardController(object):
    def __init__(self):
        pass

    # Returns a random hexadecimal string
    def rand_hex(self):
        hex_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        hex_num = "#"
        for i in range(0, 6):
            hex_num += hex_list[random.randint(0, 15)]
        return hex_num
