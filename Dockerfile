FROM socialengine/nginx-spa:latest 
COPY ./www/ /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html