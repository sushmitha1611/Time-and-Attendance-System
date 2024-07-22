# Time-and-Attendance-System
Create a system to manage employee attendance, leave requests, and work hours tracking.

Time and Attendance System
Project Description
This project is a Time and Attendance System designed to manage employee attendance, leave requests, and work hours tracking. The system is built using Java with Spring Boot for the backend, Angular for the frontend, and PostgreSQL for the database. Docker is used for containerization, and Kubernetes is used for orchestration.

Technologies Used
Java
Spring Boot
Hibernate
Angular
PostgreSQL
RESTful APIs
Docker
Kubernetes
Project Structure
css
Copy code
TimeAttendanceSystem/
├── backend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/
│   │               └── paychex/
│   │                   └── attendance/
│   │                       ├── controller/
│   │                       ├── entity/
│   │                       ├── repository/
│   │                       └── service/
│   ├── Dockerfile
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── application.properties
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   └── environments/
│   ├── Dockerfile
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── Jenkinsfile
└── README.md
Prerequisites
Docker
Docker Compose
Node.js and npm
Angular CLI
Maven
PostgreSQL
Setup Instructions
1. Initialize the Project
bash
Copy code
# Initialize git repository
git init TimeAttendanceSystem
cd TimeAttendanceSystem

# Create directories for backend and frontend
mkdir backend frontend
cd backend

# Create Spring Boot project
mvn archetype:generate -DgroupId=com.paychex.attendance -DartifactId=attendance -DarchetypeArtifactId=maven-archetype-webapp
cd ../frontend

# Create Angular project
ng new attendance-frontend
2. Develop the Backend
Define Entities
Create Repositories
Create Services
Create Controllers
Configure Application Properties
3. Develop the Frontend
Create Angular components and services
4. Dockerize the Application
Backend Dockerfile
Create a Dockerfile in the backend directory:

dockerfile
Copy code
# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the executable JAR file to the container
COPY target/attendance-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
Frontend Dockerfile
Create a Dockerfile in the frontend directory:

dockerfile
Copy code
# Stage 1: Build the Angular app
FROM node:14 as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/attendance-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
5. Set Up CI/CD with Jenkins and Kubernetes
Create a Jenkinsfile to define the CI/CD pipeline.
Configure Jenkins to build and deploy the Docker containers to a Kubernetes cluster.
6. Running the Application
Using Docker Compose
Create a docker-compose.yml file in the project root:

yaml
Copy code
version: '3.7'
services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/attendance
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=yourpassword
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: attendance
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: yourpassword
    ports:
      - "5432:5432"
Run the application with Docker Compose:

bash
Copy code
docker-compose up --build
7. Accessing the Application
The backend will be available at http://localhost:8080
The frontend will be available at http://localhost
