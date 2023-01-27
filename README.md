# hack-utd-2022

“Vehicular Artificial Intelligence Presets (VAIP)” for the Toyota Driver Experiennce Challenge

This is our submission for the 2022 Fall Hackathon at the University of Texas at Dallas. This is a full-stack webapp that uses deep-learning neural network to identify a driver's face, log the user in based on the classified face from a linked Firebase database of users, and apply driver presets based on the user's preferences. 

## Clone and install dependencies: (Make sure you have git and git cli on your machine)
```
git clone https://github.com/aerongcanlas/HackUTD2022.git
cd HackUTD2022
cd client
npm i
cd .. 
cd flask-server
python -m venv venv
source venv/Scripts/activate
pip install Flask
pip install firebase_admin
```

## Run client and server
### Client
Go to client folder 
```
npm run dev
```

### Server
Go to flask-server folder
```
python server.py
```
Pictures of demo:

![IMG_4156](https://user-images.githubusercontent.com/70988841/215034863-01b0d6a0-09f9-44de-8b80-65b70629c713.jpg)
![IMG_4161](https://user-images.githubusercontent.com/70988841/215034862-8683a83a-a347-45b4-978f-f266a933a96e.jpg)

