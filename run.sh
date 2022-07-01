rm -rf ./watching-man
git clone https://github.com/Do1phin/watching-man.git
# shellcheck disable=SC2164
cd ./watching-man
pwd

#docker-compose build --no-cache
docker-compose down
docker-compose pull
docker-compose up -d
sleep 10s
echo "restore data"
docker-compose exec -T mongo mongorestore --archive --gzip < dump.gz --uri="mongodb://admin:secret@localhost:27017/?authSource=admin" --nsInclude="cityOps.*"