// test-prisma.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.$connect();
  console.log('Connexion OK');
  await prisma.$disconnect();
}
main();