# hack-utd-2022

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


