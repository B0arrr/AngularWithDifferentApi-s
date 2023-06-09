const Sequelize = require('sequelize').Sequelize
const DataTypes = require('sequelize').DataTypes
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require("cors")

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const sequelize = new Sequelize('sqlite://../baza/test.db')
const User = sequelize.define( 'User',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING
}, {
    tableName: 'users',
    timestamps: false
})


app.post('/add_user', async (req, res) => {
    const user = req.body
    res.json(await User.create(user))
})

app.get('/users', async (req, res) => res.json(await User.findAll()))

module.exports = app
