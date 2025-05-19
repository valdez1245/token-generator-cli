#!/usr/bin/env node

import fs from 'fs';
import crypto from 'crypto';
import { program } from 'commander';
import dotenv from 'dotenv';
dotenv.config();

// Opciones CLI
program
  .option('--length <number>', 'Longitud del token', parseInt)
  .option('--count <number>', 'Cantidad de tokens', parseInt)
  .option('--save [filename]', 'Guardar los tokens en un archivo');

program.parse(process.argv);
const options = program.opts();

// Valores desde CLI o .env o valores por defecto
const tokenLength = options.length || parseInt(process.env.DEFAULT_TOKEN_LENGTH) || 32;
const tokenCount = options.count || parseInt(process.env.DEFAULT_TOKEN_COUNT) || 1;
const saveToFile = options.save;
const filename = typeof saveToFile === 'string'
  ? saveToFile
  : process.env.DEFAULT_SAVE_FILENAME || 'tokens.txt';

const prefix = process.env.TOKEN_PREFIX || '';
const suffix = process.env.TOKEN_SUFFIX || '';

const generateToken = () => {
  return prefix + crypto.randomBytes(Math.ceil(tokenLength / 2)).toString('hex').slice(0, tokenLength) + suffix;
};

const tokens = [];

for (let i = 0; i < tokenCount; i++) {
  const token = generateToken();
  console.log(`🔐 Token ${i + 1}: ${token}`);
  tokens.push(token);
}

if (saveToFile) {
  fs.writeFileSync(filename, tokens.join('\n'));
  console.log(`💾 Tokens guardados en archivo: ${filename}`);
}
