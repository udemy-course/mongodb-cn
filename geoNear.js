db.restaurant.aggregate(
    [
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [-73.8701, 40.7523]
                },
                num: 10,
                maxDistance: 100000,
                distanceField: "distance"
            }
        },
        {
            $project: {
                _id: 0,
                name: 1,
                distance: 1
            }
        }
    ]
)