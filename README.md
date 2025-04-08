# 📣 Announcer-Style 5-Day Weather Forecast App

Welcome to the **Announcer-Style Weather Forecast** app — a fun and functional weather tool that delivers five-day forecasts in the voice of a high-energy sports commentator!

---

## 🌦 Purpose
**As a traveler**, you want to know what to expect from the weather when planning your next trip. This app turns dull forecasts into entertaining daily rundowns — so you can pack your sunscreen, umbrella, or jersey with confidence.

---

## ✅ Features
- 🌍 **Search any city** by name (e.g., "Sacramento, CA")
- 📆 **5-day forecast** powered by OpenWeatherMap
- 🎙️ **Announcer-style commentary** for each day
- ⚙️ Simple Express + TypeScript backend
- 🌐 HTML frontend with live API integration

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js v18+
- npm

### 📦 Install Dependencies
```bash
npm install
```

### 🔑 API Setup
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up and get a free API key
3. Create a `.env` file in the root of the project:
```
WEATHER_API_KEY=your_openweathermap_api_key_here
```

### ▶️ Run the App in Development
```bash
npx ts-node src/server.ts
```

Your API will now be live at:
```
http://localhost:3000/weather?location=CityName
```

### 🌐 Launch the Frontend
Open the provided `forecast.html` in your browser to:
- Enter a city
- View the 5-day forecast with sports-style commentary

---

## 🧪 Example Output
### Request:
```
GET /weather?location=Sacramento CA
```

### Response:
```json
{
  "result": {
    "day1": "And here we go, folks! Day 1 is looking like a scorcher with a high of 95 degrees and clear skies.",
    "day2": "Moving on to day 2, we've got a high of 90 degrees and a chance of showers. It's going to be a nail-biter!",
    "day3": "Day 3 is shaping up beautifully with 85 degrees and sunny skies. Perfect for outdoor fun!",
    ...
  }
}
```

---

## 🛠 Technologies Used
- TypeScript
- Express.js
- Axios
- dotenv
- OpenWeatherMap API

---

## 📁 Project Structure
```
/Develop
├── src
│   └── server.ts       # TypeScript Express server
├── forecast.html       # Basic HTML frontend UI
├── .env                # Contains WEATHER_API_KEY (not committed)
├── package.json
└── tsconfig.json
```

---

## 🔐 Security Notes
- Do **not** share your `.env` or API key publicly
- Make sure `.env` is listed in `.gitignore`

---

## 📫 Contact
**Author**: Jared Mindock  
📧 Email: jjmin94@gmail.com

Feel free to reach out for feedback, suggestions, or collaboration opportunities!

---

Enjoy your forecast, and may the weather always be in your favor! ☀️🌧️🏈

