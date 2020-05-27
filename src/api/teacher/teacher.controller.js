'use strict';
const connection = require('../../config/db')

module.exports = {
    ifExists: async ({ email, pass }) => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT email FROM teachers WHERE email = ? AND pass = ?', [email, pass], (err, rows, fields) => {
                if (err)
                    reject(err)
                
                if (rows.length == 0)
                    reject("no account found")    
                else
                    resolve("account found")
            })  
        })
    }
}