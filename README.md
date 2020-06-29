# koa-swagger
Swagger2 editor and view UI with koa server  

### Rely on: `node、pm2`  (pm2 not necessary)

    pm2:  
         npm install pm2 -g
  
### Init:  

    npm install  
    npm run build  

#### Start server:  

    npm run start  -- `also will start doc server`
  
    ( or start server by: node app.js )  

Restart server by pm2:  

    pm2 restart all  

#### Visit links:  

    http://localhost:8080/swagger-ui/index.html  
    http://localhost:8080/swagger-editor/index.html

# Docs server:
  
### Rely on: `docsify`
  
    npm install docsify -g
  
    npm run docs  `-- start doc server`
