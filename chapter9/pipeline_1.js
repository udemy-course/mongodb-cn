db.orders.aggregate(
    [
        {$match:{status:"finished"}},
        {$group: {_id: "$name", total:{$sum: "$amount"}}},
        {$sort: {total:-1}}
    ]
)

db.movie.aggregate(
    [
        {$group: {_id: "$director_name", avg_imdb:{$avg: "$imdb_score"}}},
        {$sort: {avg_imdb:-1}}
    ]
)