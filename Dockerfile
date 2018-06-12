FROM httpd
COPY . /usr/local/apache2/htdocs/
LABEL maintainer="Docker@MarkKozel.net"