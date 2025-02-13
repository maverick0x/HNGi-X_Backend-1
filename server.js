const express = require("express")
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query

    if (slack_name && track) {
        const date = new Date()

        const full_year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');

        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        res.status(200).json({
            "slack_name": `${slack_name}`,
            "current_day": `${days[date.getUTCDay() - 1]}`,
            "utc_time": `${full_year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`,
            "track": `${track}`,
            "github_file_url": "https://github.com/maverick0x/HNGi-X_Backend-1/blob/main/server.js",
            "github_repo_url": "https://github.com/maverick0x/HNGi-X_Backend-1",
            "status_code": `${res.statusCode}`
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