FROM php:8.2.5-alpine3.16

EXPOSE 8000

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /var/www/html

RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-scripts

COPY .env .env

RUN php artisan key:generate

CMD php artisan serve