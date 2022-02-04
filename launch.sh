#! /bin/bash

# If you are having problems, make sure your java version is 1.8.0_xx with java -version

RAM='2048M'
FORGEJAR="forge-1.16.5-36.2.22.jar"

PARAMS="-server -Xms$RAM -Xmx$RAM -jar $FORGEJAR nogui"

echo "Starting server"
echo "java $PARAMS"

java $PARAMS
