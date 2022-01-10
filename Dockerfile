FROM nginx:latest

COPY static /usr/share/nginx/html/static
COPY index.html /usr/share/nginx/html/
COPY stream.html /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80