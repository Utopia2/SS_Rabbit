import json
from bottle import run, route, response
from utils import get_test_data

@route('/', methods=['GET', 'POST'])
def my_test1():
    # rv = {"code":200, "message":"Success", "data":[{"a": 1, "b":2}, {"a": 3, "b":4}]}
    # rv = {"data":[{"name": "Lee", "age":27, "height":"180cm", "weight":"61kg"}, {"name": "Jane", "age":18, "height":"160cm", "weight":"45kg"}]}
    rv = {"data":get_test_data()}
    response.headers['Content-Type'] = 'application/json'
    return json.dumps(rv)

@route('/test', methods=['GET', 'POST'])
def my_test2():
    # rv = {"code":200, "message":"Success", "data":[{"a": 1, "b":2}, {"a": 3, "b":4}]}
    rv = {"data":get_test_data()}
    response.headers['Content-Type'] = 'application/json'
    return json.dumps(rv)

run(host="127.0.0.1", port=8888, reloader=True)
