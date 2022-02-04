FROM public.ecr.aws/nginx/nginx:1.21

VOLUME ["/etc/ssl/", "/etc/ssl/"]
VOLUME ["/etc/nginx/conf/", "/etc/nginx/conf/"]

COPY build/static /usr/share/nginx/html/static
COPY build/index.html /usr/share/nginx/html/
COPY build/favicon.ico /usr/share/nginx/html/
COPY build/asset-manifest.json /usr/share/nginx/html/
COPY nginx/50x.html /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 1935