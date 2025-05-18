#!/usr/bin/env node

const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
const args = process.argv.slice(2);

if (!secret) {
  console.error("❌ JWT_SECRET no definido en el archivo .env");
  process.exit(1);
}

if (args.length === 0) {
  console.error("❌ Debes proporcionar un payload JSON");
  process.exit(1);
}

let payload;
try {
  payload = JSON.parse(args[0]);
} catch (err) {
  console.error("❌ Payload inválido. Asegúrate de pasar un JSON válido.");
  process.exit(1);
}

const token = jwt.sign(payload, secret, { expiresIn: "1h" });
const timestamp = Date.now();
const fileName = `token_${timestamp}.txt`;
fs.writeFileSync(fileName, token);

console.log(`✅ Token generado y guardado en ${fileName}`);

