'use strict';
const connection = require('../../config/db')
    , uuid = require('uuid')
    , async = require('async');

module.exports = {
    create: async ({ title, description, duration, start, end, date, students }) => {
        return new Promise(async (resolve, reject) => {
            const testId = uuid.v4();
            connection.beginTransaction((err) => {
                if (err) {
                    connection.rollback()
                    reject(err)
                }
                connection.execute('INSERT INTO tests (id, title, description, duration, start, end, date) values(?,?,?,?,?,?,?)', [testId, title, description, duration, start, end, date], (err, results) => {
                    if (err) {
                        connection.rollback()
                        reject(err)
                    }
                    students.forEach(studentEmail => {
                        connection.query('INSERT INTO reports(student_email, test_id) values(?,?)', [studentEmail, testId], (err, results) => {
                            if (err) {
                                connection.rollback()
                                reject(err)
                            }
                        })
                    })
                    connection.commit((err) => {
                        if (err) {
                            connection.rollback()
                            reject(err)
                        }
                        resolve("Inserted")
                    })
                })
            })
        })
    },
    get: async ({ id }) => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM tests WHERE id = ?', [id], (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows[0])
            })
        })
    },
    getAll: async () => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM tests', (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            })
        })
    },
    getStudentsEmail: async ({ id }) => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT student_email FROM reports WHERE test_id = ?', [id], (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            })
        })
    }
}