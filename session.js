//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pRRjB0cXNBZGlPUktKZ1BUZFV0MklScVV6dXZPbjdKZEdNajJXU3dHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0t1WThzMjBxWW5Ecm56WUN1SWQwYWJpK3Vqem5oUDZBcEI3Nzl1c0luND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1doVFFCbG0wR1V6bW1mUE96ZnhuaGpNR2dSYWdHTFYwMkIxNStqZG5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra2JiQU5PYVgwNXl0cTF1TjFrSVpYWklXdncvWDY2ZE83TmJqNjJ0QUNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFM0dYa09ubnFHWCthSnpCdlYySEUvU1M0WkROenp1Q0tRV3AxU05sbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDR1R3WVZGOFhZblMvT2pxK2hEVDErays5dlpJbStVUmZTTVdrYjRveEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JUY21ZRWl2dnlSSWE0c1dQV3lrODRrMTBZekhzUTRNb2lsdHlxdVNWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnpRNUNZNGFEZjJjUXFTdEh2TnJmKzA3ZGN1TkdoOUNhV2h5OFhoMzlWYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZHbjNCUENPWjBIQ3NFWWNTOVZNdnpkNGpSbWYyUTRWdnJTL0UxVU8wOTdudWkvaC9oYmRVTWgzT1VZYUpvOW9ZcGpwOFdVOGtjK1JxVkFjRlc0bUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IjlaL0JScHB2WGZzSDQ3T2cvWnlsbGJ0WS9JYjZiNEdEdXI2MzkxVGRzQmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImE4bDBGNXdhUmlxbXdlTnNQcExNVHciLCJwaG9uZUlkIjoiZjcxYmUyY2YtZWFlZi00M2U2LTliMjUtOGI5ZTZjNTRlNmU3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHdURLM1pKQ2lqS1FoVHgvNlRLYUwrSDBMRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMUozeEdBVFpRR0xYejY0SHR0cklBMDRDbnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzNSWTNaWFEiLCJtZSI6eyJpZCI6IjIzNDgxNDg4ODI2Mjc6MjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTU5MTU5OTU0ODAxMzk6MjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYWM3ck1HRU4rYW9jVUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtZ1J4VHM0UXArN09PUkxEWnJsSnRQMFlubU1BR2FlUk5BV1lVMyt2T2dZPSIsImFjY291bnRTaWduYXR1cmUiOiJkcm55YWZwSDV4bXREUlVnZUZDM29QcEVtbDY3N3B2V3ZwenVVMzhMclZoQ3RJRFc0cVdBNW9JbGt0T2lWUDJWejR1L1Rld1g3bnppSDlKcm5LQ2tBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV09SVVF0LzR6NEF1ZGxMV2hDQmdVVnBQTmV2eFZQd1Y4Y1F6ZHdvMDRpN3ZBTTlQOVJ1bmpzMzRkMFFrVUN6L3gzc3FhSzBKMnV4SFJvUG5KeGV3QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ4ODgyNjI3OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpvRWNVN09FS2Z1emprU3cyYTVTYlQ5R0o1akFCbW5rVFFGbUZOL3J6b0cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg2MDMzMywibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUJVQUFGZHgifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
