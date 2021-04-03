from flask import Flask,redirect,url_for,render_template,request

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def home():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('homepage.html')

@app.route('/categories',methods=['GET','POST'])
def categories():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('categories.html')

@app.route('/shoe',methods=['GET','POST'])
def shoe():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('shoe.html')

@app.route('/watch',methods=['GET','POST'])
def watch():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('watch.html')

@app.route('/handbag',methods=['GET','POST'])
def handbag():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('handbag.html')

@app.route('/headset',methods=['GET','POST'])
def headset():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('headset.html')

@app.route('/earring',methods=['GET','POST'])
def earring():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('earring.html')

@app.route('/necklace',methods=['GET','POST'])
def necklace():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('necklace.html')

@app.route('/shirt',methods=['GET','POST'])
def shirt():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('shirt.html')

@app.route('/craft',methods=['GET','POST'])
def craft():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('craft.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)
    # ,host='192.168.43.223')