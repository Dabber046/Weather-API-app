import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/weather', async (req: Request, res: Response) => {
  const location = req.query.location as string;
  if (!location) {
    res.status(400).json({ error: 'Location is required' });
    return;
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const geoRes = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${apiKey}`);
    const { lat, lon } = geoRes.data[0];

    const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
    const forecasts = forecastRes.data.list.filter((_: any, i: number) => i % 8 === 0).slice(0, 5);

    const commentary = forecasts.map((f: any, i: number) => {
      const temp = Math.round(f.main.temp);
      const weather = f.weather[0].description;
      return generateAnnouncerStyle(i + 1, temp, weather);
    });

    const result: Record<string, string> = {};
    commentary.forEach((text: string, idx: number) => {
      result[`day${idx + 1}`] = text;
    });

    res.json({ result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

function generateAnnouncerStyle(day: number, temp: number, weather: string): string {
  const templates = [
    `And here we go, folks! Day ${day} is looking like a scorcher with a high of ${temp} degrees and ${weather}.`,
    `Moving on to day ${day}, we've got a high of ${temp} degrees and ${weather}. It's going to be a nail-biter!`,
    `Day ${day} is shaping up to be beautiful with a high of ${temp} and ${weather}. Perfect for outdoor fun!`,
    `As we head into day ${day}, get ready for ${weather} and a high of ${temp} degrees. A real sizzler!`,
    `And finally, day ${day} closes out with ${weather} and ${temp} degrees. A thrilling end to the week!`
  ];
  return templates[day - 1] || `Day ${day}: Expect ${weather} with a high of ${temp} degrees!`;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
