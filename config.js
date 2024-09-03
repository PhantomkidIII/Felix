//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "27682708973";
global.owner = process.env.OWNER_NUMBER || "27682708973";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh0SmRCVXFKYmxXdVlCQ0Nla0lZWXpRY1JNYlVQa05YT2lyK3lBZU9GZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWt4dlhSbzB1MS9seFU1a3JGZC9weDYrcVVLMm82eEVTVldGWVZ0dEVnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRURiVFdyNjhWU1dIaVV4aXB1WmdrbXk3OEllRlZPZENEbjIwdUN1TDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cVZJQVY2NG5kNmZxRWVlVE1XOW9zdGIrTTVDNnRCOGZuczkyM1VWNmw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQb09ILzB6WGxpWjZuOCthMEZTLy9ZVGVEZmR6RW1WNzF2VStoeU44VUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR3ZXhzV2haZjAvaXhKSGsrUElVSm0zMGYvbGtRcmdweDJkc0lCV2dielk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkcvMUs2SWpuWVJZVVNHbGpDMDZyS1ovZTF3aFh1dVBVRlg4UWdEUXJFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGd1S2U1aWltMnZxRnpXaU5BeHhTMkRMa21NMGs1c2tzckVIcENkTlVUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA3d3BYVVZiNTRkYUNvYmJCb3E5VXpMYkRZek1QOHFBSlNUQzZMQkZJc1RnUUlhQjRqWGNjZGRqSEF1UEp0ZkRyL0hoS08yZDg5QmpxY0ZJUkJZSEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6ImtWdCtFM2NiWVZwQW10WVROUGtnclloT3VmOXZtbUZZQ0g1QmREamdIbDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZYelhaTzVTU01hZ1lOUGpZNU5IWUEiLCJwaG9uZUlkIjoiZDhlYjI4Y2UtOTQwMS00Yjg1LTkxM2ItMjM5MjJkMTViYjVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GYWQyNkVURXp3UGI3anRucmtXNlFobWEybz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERmZhelRYVEdqRTVCQkd5bWMveDhZdURSa0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTk0VFpHRjMiLCJtZSI6eyJpZCI6IjI3NjgyNzA4OTczOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSW1tYW51ZWwgRmVsaXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PMGhxVUVFTStYM0xZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5BWXIwRG5tZzE0YXdwMmpRcTFrdXM2SkVseEl5WDJPK2IwM2dHazYwR2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJjNGRHU2IyelpTRGEwRkFNUGlNUjFLSmRBYmNyWFR0Z05MOCtmMlFMQ0RkZHdaNUtna0dmVWZ1YWxKVkNMRC9nTW9kWXBHOGtWWE1UNFpHb294SERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxalVpVE04d21qbUs1cFY3L1RsNWhGeFpXRS9sWmFUVERNM2IwKytjRnBOTGRucWdHQ3RyKzlMd2U5cFFTWmc1TENhcWNnUzRHQjYyckhiMlAzZDVEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjgyNzA4OTczOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWndHSzlBNTVvTmVHc0tkbzBLdFpMck9pUkpjU01sOWp2bTlONEJwT3RCcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTM2OTMwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCb0MifQ=="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
