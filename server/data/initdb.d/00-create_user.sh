#!/bin/bash

VARIABLES="var user = '${MONGODB_USERNAME}', "
VARIABLES+="pass = '${MONGODB_PASSWORD}', "
VARIABLES+="database = '${MONGO_INITDB_DATABASE}'"

mongo --eval "${VARIABLES}" "${MONGO_INITDB_DATABASE}" "/docker-entrypoint-initdb.d/createUser"