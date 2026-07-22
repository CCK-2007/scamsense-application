from flask import Flask
from flask_cors import CORS

from routes.message_routes import message_bp
from routes.batch_routes import batch_bp

app = Flask(__name__)

CORS(app)

# Register routes
app.register_blueprint(
    message_bp,
    url_prefix="/api/message"
)

app.register_blueprint(
    batch_bp,
    url_prefix="/api/batch"
)


@app.route("/")
def home():
 
    return {
        "application": "ScamSense",
        "status": "Running"
    }


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )