FROM php:apache

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-scripts

COPY .env-docker .env

EXPOSE 8000

CMD php artisan key:generate && php artisan migrate --seed && php artisan serve --host=0.0.0.0 --port=8000