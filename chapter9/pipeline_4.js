db.dropDatabase()
db.test.insertMany(
    [
        {
            name: "Jack",
            hobby: [
                "Reading",
                "Cooking",
                "Running"
            ]
        },
        {
            name: "Mark",
            hobby: [
                "Cooking",
                "Singing",
            ]
        }
    ]
)

db.test.aggregate(
    [
        {
            $project:{
                _id: 0,
                name: 1,
                numHobby: {
                    $size: "$hobby"
                },
                hobby: {
                    $slice: ["$hobby", 0, 3]
                }
            }
        }
    ]
)