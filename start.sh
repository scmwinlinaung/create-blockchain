#!/bin/bash
docker stack rm blockchain-api
sleep 5
docker build -t blockchain-api  ../
chmod -R 777 $HOME/Desktop/Test_Projects/create-blockchain
docker stack deploy -c docker-file.yaml blockchain-api