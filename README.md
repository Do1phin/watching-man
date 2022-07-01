# watching-man

### Installation

_There are two options for installation this project:_

## First variant
1. Copy the contents of the build_and_run.sh script
   ```sh
   rm -rf ./watching-man
    git clone https://github.com/Do1phin/watching-man.git
    git checkout dev
    # shellcheck disable=SC2164
    cd ./watching-man
    pwd

    docker-compose build --no-cache
    docker-compose down
    docker-compose pull
    docker-compose up -d
    echo "restore data"
    sleep 7s
    docker-compose exec -T mongo mongorestore --archive --gzip < dump.gz --uri="mongodb://admin:secret@localhost:27017/?authSource=admin" --nsInclude="cityOps.*"
    echo "open http://localhost"
   ```
2. Run it


## Second variant

1. Clone the repo
   ```sh
   git clone https://github.com/Do1phin/watching-man.git
   ```
2. In project folder run commands
   ```sh
   docker-compose build --no-cache
   docker-compose down
   docker-compose pull
   docker-compose up -d
   echo "restore data"
   sleep 7s
   docker-compose exec -T mongo mongorestore --archive --gzip < dump.gz --uri="mongodb://admin:secret@localhost:27017/?authSource=admin" --nsInclude="cityOps.*"
   echo "open http://localhost"
   ```
