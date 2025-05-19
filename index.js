#!/usr/bin/env node

// index.js
import crypto from 'crypto';

// Longitud del token por defecto
const DEFAULT_LENGTH = 32;

// Función para generar token seguro
function generateToken(length = DEFAULT_LENGTH) {
  return crypto.randomBytes(length).toString('hex');
}

// Leer argumentos desde la CLI
const args = process.argv.slice(2);
const length = args[0] ? parseInt(args[0], 10) : DEFAULT_LENGTH;

// Validar longitud
if (isNaN(length) || length <= 0) {
  console.error('❌ Longitud inválida. Usa un número entero positivo.');
  process.exit(1);
}

// Generar y mostrar el token
const token = generateToken(length);
console.log(`🔐 Token generado (${length} bytes):\n${token}`);
