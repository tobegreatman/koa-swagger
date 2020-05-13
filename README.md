# koa-swagger
swagger2 editor and view UI with koa server
#
rely on: node、pm2  

  pm2:  
  npm install pm2 -g
  
#
init:  
  npm install  
  npm run build
#
start server:  
  npm run start  
  
restart server by pm2:  
  pm2 restart all
#
visit:  
  http://localhost:8882/swagger-ui/index.html  
  http://localhost:8882/swagger-editor/index.html
