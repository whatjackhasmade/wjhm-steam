require("dotenv").config();
const PORT = process.env.PORT || 8000;

import express from "express";
import SteamAPI from "steamapi";

import type { Request, Response } from "express";

const app = express();
const steam = new SteamAPI(process.env.STEAM_API_KEY ?? "");

app.get("/", async (_: Request, res: Response) => {
	const getUserSummary = await steam.getUserSummary(process.env.STEAM_ID ?? "");
	return res.send({ ...getUserSummary });
});

app.listen(PORT, async () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
