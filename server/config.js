import { config } from "dotenv";
config({ path: ".env" });

export const env = {
  BOTID: process.env.BOTID,
  PHONENBR: process.env.PHONENBR,
  TOKEN: process.env.TOKEN,
  URLDB: process.env.URLDB,
  DB: process.env.DB,
};

export const TOKEN_SECRET = "seccret";
