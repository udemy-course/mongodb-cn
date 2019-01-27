mkdir -p ~/db/data1
mkdir -p ~/db/log1
mongod --dbpath ~/db/data1 --port 27021 --replSet set1 --fork --logpath ~/db/log1/mongodb.log

mkdir -p ~/db/data2
mkdir -p ~/db/log2
mongod --dbpath ~/db/data2 --port 27022 --replSet set1 --fork --logpath ~/db/log2/mongodb.log

mkdir -p ~/db/data3
mkdir -p ~/db/log3
mongod --dbpath ~/db/data3 --port 27023 --replSet set1 --fork --logpath ~/db/log3/mongodb.log


mkdir -p ~/db/data4
mkdir -p ~/db/log4
mongod --dbpath ~/db/data4 --port 27024 --replSet set1 --fork --logpath ~/db/log4/mongodb.log
