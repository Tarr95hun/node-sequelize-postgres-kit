# node-sequelize-postgres-kit

 ### To start server
```
npm start

rs ---> for restart
```
install Docker

Docker Command to run Postgres: 
        docker run --name postgres-dev -e POSTGRES_PASSWORD=admin -p 5432:5432 -d --rm postgres
        docker ps -a

Install:
    npm i --save sequelize
    npm i --save pg pg-hstore

install pgAdmin

Get Docker IP Address: 
    docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres-dev

