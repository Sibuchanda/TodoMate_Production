# TodoMate – MERN Todo Application (Dockerized)

TodoMate is a full-stack Todo application built using the **MERN stack** and fully **containerized with Docker**.  
Users can run the entire application (Frontend, Backend, MongoDB) without installing Node.js or MongoDB locally.


## Tech Stack

- Frontend: React (Vite) + Nginx
- Backend: Node.js + Express (REST API)
- Database: MongoDB
- Containerization: Docker & Docker Compose


## Prerequisites

Make sure the following tools are installed on your system:

- Docker  Desktop ( For window users)
- docker --version

# 1. Clone the Repository
```
HTTPS : git clone https://github.com/Sibuchanda/TodoMate_Production.git
SSH : git clone git@github.com:Sibuchanda/TodoMate_Production.git
cd TodoMate_Production
```
# 2. Run the Application Using Docker

## Step 2.1 Pull Docker Images
```
docker pull sibuchanda/todomatebackend:latest
docker pull sibuchanda/todomate:latest
docker pull mongo:7
```
## Step 2.2 Start the Application
From the project root (where docker-compose.yml exists):
```
docker-compose up -d
```
This will:
  - Create a private Docker network
  - Start MongoDB with persistent storage
  - Start backend API service
  - Start frontend served via Nginx

Access the Application

 - Frontend:
http://localhost:3000
 - Backend API:
http://localhost:5000

## 3. Stop the Application
To stop and remove all running containers:
```
docker-compose down
```
### MongoDB data will remain safe due to Docker volumes.