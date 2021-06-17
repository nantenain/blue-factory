#!/bin/bash
PHP=`which php`
echo "======= test starting ========"
$PHP bin/console doctrine:database:create
$PHP bin/console doctrine:schema:update --force