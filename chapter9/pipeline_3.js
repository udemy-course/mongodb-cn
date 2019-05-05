db.orders.aggregate(
    [
        {
            $match: { status: "finished" } },
        {
            $project:
                {
                    name: {$toUpper: "$name"},
                    new: {
                        $concat: ["$name", " spend ", {$toString: "$amount"}]
                    },
                    flag: {
                        $cond: {
                            if: {$gt: ["$amount", 200]},
                            then: "big",
                            else: "small"
                        }
                    }
                }
        }
    ]
)