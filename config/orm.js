/* Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
   .

*/
// Requirements
const connection = require("./connection.js");

//---
const orm = {

//--- * `selectAll()`
    selectAll: function(burgers, cb) {
        connection.query("SELECT * FROM " + burgers + ";", function(err, res) {
            if (err) throw err;
            // console.log(res);
            cb(res);
        });
    },

//---* `insertOne()`
    insertOne: function(burgers, burger_name, cb) {
        connection.query("INSERT INTO" + burgers_name + " SET ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },

//---* `updateOne()`
    updateOne: function(burgers, condition, id, cb) {
        connection.query("UPDATE" + burgers + "SET" + condition + "WHERE id = ?", function(err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },
}

//---* Export the ORM object in `module.exports`
module.exports = orm;

    
     
     
