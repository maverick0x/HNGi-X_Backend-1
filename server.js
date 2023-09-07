const express = require("express")
const date = new Date()

const app = express()

app.use(express.json())

app.get('/task1', (req, res) => {
    const { slack_name } = req.query

    if (slack_name) {

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        res.status(200).json({
            "slack_name": `${slack_name}`,
            "current_day": `${days[date.getUTCDay() - 1]}`,
            "utc_time": `${date.getDate()}`
        })
    } else {
        res.status(400).json({
            "message": "Invalid query parameters"
        })
    }
})

var PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})