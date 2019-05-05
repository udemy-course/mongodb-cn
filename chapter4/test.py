import pymongo
import datetime

client = pymongo.MongoClient('localhost', 27017)

db = client['demo']

collection = db['pymongo']

data = {
    'a': 1,
    'b': 1.2,
    'c': 123456789123456789,
    'd': datetime.datetime.utcnow(),
    'e': ['a', 'b', 'c'],
    'f': {
        '1': 1,
        '2': [1, 2]
    }
}

collection.insert_one(data)
