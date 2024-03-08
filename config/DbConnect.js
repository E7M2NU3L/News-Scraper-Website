const mongoose = require('mongoose');

// mongoose connector function
const DbConnect = () => {
    const url = process.env.DB_URL || "";
    mongoose.connect(url).then(() => {
        console.log("Database connection established");
    }).catch((err) => {
        console.log("error: ", err.message);
    })
}

// export the module
module.exports = DbConnect;

