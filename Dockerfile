FROM php:8.1-apache
RUN apt-get update && apt-get install -y \
    nano \
 && rm -rf /var/lib/apt/lists/*
COPY html/ /var/www/html/
RUN date > /var/www/html/buildtime.txt
EXPOSE 81