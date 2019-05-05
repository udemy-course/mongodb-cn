db.createUser(
    {
        user : "admin",
        pwd : "admin",
        roles: [ 
            {
                role : "readWrite", db : "admin"},
            {
                role:  "userAdminAnyDatabase",
                db : "admin"
            }
        ]
    }
)