import express from "express";
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;
const generalUrl = "https:/www.metaweather.com/api";

app.use(cors())

app.listen(port, () => console.log(`http://localhost:${port}`));

app.get("/*", (req, res) => {

  const query = req.query ? `?${new URLSearchParams(req.query)}` : ''
return fetch(`${generalUrl}${req.path}${query}`)
.then(response => response.json())
.then(data =>res.send(data))
.catch(err => res.send(err))
});
