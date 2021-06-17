## Project configuration

### With docker 🐳

To use docker, make sure the following environment variables exists
If not changed during the development of the project, they are already defined in ``.env.local`` file


```bash
# .env.local
KERNEL_CLASS='App\Kernel'
APP_SECRET='$ecretf0rt3st'
SYMFONY_DEPRECATIONS_HELPER=999999
PANTHER_APP_ENV=panther
PANTHER_ERROR_SCREENSHOT_DIR=./var/error-screenshots
DATABASE_URL="mysql://root:root@mysql:3306/blue?serverVersion=5.7"

###> symfony/mailer ###
## MAILER_FROM and MAILER_TO will be used then from() or to() are not provided 
MAILER_DSN=smtp://maildev:25
MAILER_FROM="No Reply <no-reply@noreply.com>"
MAILER_TO="No Reply <no-reply@noreply.com>"
###< symfony/mailer ###

MESSENGER_TRANSPORT_DSN=doctrine://default
```
```bash
docker-compose build
docker-compose up -d
```

## Docker environment

To enter in the project environment follow the command
```
docker-compose exec worker bash 
```

### to isntall the project
```
composer install
```


### to isntall the javascript dependencies
```
yarn install
cd assets
yarn install
cd ../
```

### to create database
```
php bin/console doctrine:database:create
```

### Update database schema (when there are entity changes)

```
php bin/console doctrine:schema:update -f
```

## project availability

the worker is available in ``http://localhost``but you can change the port of worker in
the ```.env``` file

the adminer is available in ``http://localhost.4444``but you can change the port of worker in
the ```.env``` file

the api is available in ```http://localhost/api``` but you can change the port of worker in
the ```.env``` file
