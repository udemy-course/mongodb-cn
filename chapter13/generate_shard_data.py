import random
import string

res = []
min_char = 100
max_char = 200
allchar = string.ascii_letters + string.punctuation + string.digits


for i in range(100000):
    tmp = {}
    tmp['testkey'] = random.randint(1, 10000)
    tmp['testtext'] = "".join(random.choice(allchar) for x in range(random.randint(min_char, max_char)))
    res.append(tmp)

f = open('shard_data.json', 'w')
import json
json.dump(res, f)
f.close()