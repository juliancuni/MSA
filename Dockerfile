FROM socialengine/nginx-spa:latest 
COPY ./www /app
RUN chmod -R 777 /app