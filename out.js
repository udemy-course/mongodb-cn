db.movie.aggregate(
    [
        {
            $group: {
                _id: "$director_name",
                avg_imdb:{
                    $avg: "$imdb_score"
                }
            }
        },
        {
            $sort: {
                avg_imdb: -1
            }
        },
        {
            $out: "new_movie"
        }
    ]
)
