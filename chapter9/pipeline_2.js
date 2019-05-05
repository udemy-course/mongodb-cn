db.orders.aggregate(
    [
        {
            $match: { status: "finished" } },
        {
            $project:
                {
                    name: 1,
                    status: 1,
                    _id: 0,
                    new: ["$amount", "$name"]
                }
        }
    ]
)