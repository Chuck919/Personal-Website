from flask import Flask, render_template

app = Flask(__name__)

# Define routes for each page
@app.route('/')
def index():
    return render_template('index.html', title='index')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/ku_lion_dance')
def ku_lion_dance():
    return render_template('ku_lion_dance.html')

@app.route('/crypto_trade')
def crypto_trade():
    return render_template('crypto_trade.html')

@app.route('/tradebots')
def tradebots():
    return render_template('tradebots.html')

if __name__ == '__main__':
    app.run()