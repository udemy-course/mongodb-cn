rm -rf ~/db/*

mkdir -p ~/db/config/data
mkdir -p ~/db/config/log
mongod --port 27022 --dbpath ~/db/config/data --configsvr --replSet config --fork --logpath ~/db/config/log/mongodb.log

mkdir -p ~/db/mongos/log
mongos --configdb config/localhost:27022 --port 27021 --fork --logpath ~/db/mongos/log/mongodb.log



mkdir -p ~/db/shard0/data
mkdir -p ~/db/shard0/log
mongod --port 27023 --dbpath ~/db/shard0/data --shardsvr --fork --logpath ~/db/shard0/log/mongodb.log

mkdir -p ~/db/shard1/data
mkdir -p ~/db/shard1/log
mongod --port 27024 --dbpath ~/db/shard1/data --shardsvr --fork --logpath ~/db/shard1/log/mongodb.log



# enable sharding
mongos> sh.enableSharding("testdb")
{
	"ok" : 1,
	"operationTime" : Timestamp(1548622786, 5),
	"$clusterTime" : {
		"clusterTime" : Timestamp(1548622786, 5),
		"signature" : {
			"hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
			"keyId" : NumberLong(0)
		}
	}
}
