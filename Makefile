db:
	(cd ./memo-db && docker-compose up)

service:
	cd ./memo-service && docker build . -t memo-service 
	(docker stop memo-service &> /dev/null && docker rm memo-service &> /dev/null) | true
	docker run -p 127.0.0.1:8000:8000 --name "memo-service" memo-service

gui:
	cd ./memo-gui && docker build . -t memo-gui 
	(docker stop memo-gui &> /dev/null && docker rm memo-gui &> /dev/null) | true
	docker run -p 127.0.0.1:3000:3000 --name "memo-gui" memo-gui

run-all:
	trap 'kill %1; kill %2' SIGINT
	make db & (SLEEP 20 && make service) & (SLEEP 25 && make gui)


