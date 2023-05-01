db:
	(cd ./memo-db && docker-compose up)

service:
	(cd ./memo-service && php artisan migrate && php artisan db:seed && php artisan serve)

gui:
	(cd ./memo-gui && docker build . -t memo-gui && docker run -p 127.0.0.1:3000:3000 memo-gui)

run-all:
	(make db & (SLEEP 10 && make service) & (SLEEP 15 && make gui))

