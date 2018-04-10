import json
from flask import Flask
from flask import render_template, request
from flask import request


HOME_DIR = ''
static_folder = HOME_DIR + '/static'
template_folder = HOME_DIR + '/templates'
app = Flask(__name__)


@app.route("/")
def index(name=None):
   return render_template('index.html', name=name)


@app.route("/detail")
@app.route("/detail/<data>")
def other(data=1, name=None):
   return render_template('detailpage.html', name=name)


app.config.from_object('config')
app.run(port=5050)