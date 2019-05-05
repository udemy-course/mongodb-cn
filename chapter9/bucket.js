db.movie.aggregate(
    [
        {
            $bucket:{
                groupBy: "$year",
                boundaries: [1990, 1995, 2000, 2005, 2010, 2015, 2020],
                output: {
                    numMovies: {$sum: 1},
                    avgScore: {$avg: "$imdb_score"}
                }
            }
        }
    ]
)
