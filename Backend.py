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

@app.route('/bag',methods=['GET','POST'])
def bag():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('bag.html')

@app.route('/headset',methods=['GET','POST'])
def headset():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('headset.html')

@app.route('/Earring',methods=['GET','POST'])
def Earring():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('Earring.html')

@app.route('/necklace',methods=['GET','POST'])
def necklace():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('chocker.html')

@app.route('/Shirt',methods=['GET','POST'])
def Shirt():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('Shirt.html')

@app.route('/craft',methods=['GET','POST'])
def craft():
    # if request.method=='POST':
    #     return render_template('index.html')
    return render_template('monument.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)
    # ,host='192.168.43.223')