const mongoose = require('mongoose')

// connecting to the db_mongo
mongoose.set('useCreateIndex', true)

module.exports.mongooseConnection = () => {
    mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_POST}/${process.env.MONGO_DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Successfully connected to the database")
    }).catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err)
        // process.exit()
    });

}