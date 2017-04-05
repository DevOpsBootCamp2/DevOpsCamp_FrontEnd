FROM debian
RUN apt-get update
RUN apt-get install apache2 -y
EXPOSE 80
COPY * /var/www/html/
ENTRYPOINT ["apachectl", "-DFOREGROUND"]
