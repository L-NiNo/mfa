FROM nginx:latest
COPY ./dist/shell /usr/share/nginx/html
COPY ./shell.conf /etc/nginx/conf.d/default.conf

