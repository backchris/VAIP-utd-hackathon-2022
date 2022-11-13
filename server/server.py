# Required imports
from flask import Flask, request, jsonify, Response, render_template
from firebase_admin import credentials, firestore, initialize_app
from camera import VideoCamera
import cv2
import json

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
users_ref = db.collection('users')
ai_ref = db.collection('learning')


@app.route('/')
def index():
    # face_detector.ai()
    return render_template('index.js')


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/test')
def test():
    return {"test": "test"}


@app.route('/add', methods=['POST'])
def create():
    try:
<<<<<<< HEAD
        users_ref.add(request.get_json())
=======
        data = {'name': 'Michael', 'temperature': 70, 'fan_speed': '2'}
        # id = request.json['id']
        users_ref.add(jsonify(data))
>>>>>>> 4622034f45c9798b2e0810565e63a4aaca4cef77
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@app.route('/getallai', methods=['GET'])
def getallai():
    try:
        all_ai = [doc.to_dict() for doc in ai_ref.stream()][0]
        ai_json = json.loads(all_ai)
        return jsonify(all_ai), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@app.route('/list', methods=['GET'])
def read():
    """
        read() : Fetches documents from Firestore collection as JSON.
        users : Return document that matches query ID.
        all_users : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        user_id = request.args.get('id')
        if user_id:
            user = users_ref.document(user_id).get()
            return jsonify(user.to_dict()), 200
        else:
            all_users = [doc.to_dict() for doc in users_ref.stream()]
            return jsonify(all_users), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@app.route('/list_ids', methods=['GET'])
def list_ids():
    try:
        data = users_ref.get()
        all_users = [{doc.id: doc.to_dict()} for doc in data]
        return jsonify(all_users), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@app.route('/update', methods=['POST', 'PUT'])
def update():
    """
        update() : Update document in Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post today'}
    """
    try:
        id = request.json['id']
        users_ref.document(id).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


@app.route('/delete', methods=['GET', 'DELETE'])
def delete():
    """
        delete() : Delete a document from Firestore collection.
    """
    try:
        # Check for ID in URL query
        user_id = request.args.get('id')
        users_ref.document(user_id).delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"


if __name__ == "__main__":
    app.run(debug=True)
