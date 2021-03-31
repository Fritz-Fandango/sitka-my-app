.PHONY: build-docker
build-docker:
	docker build . -t sim
	echo "Started server at localhost:5555"
	docker run -p 5555:80 sim