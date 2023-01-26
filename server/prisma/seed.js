const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function seed() {

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
      password: '123',
    }
  })

  const adminUser = await prisma.user.create({
    data: {
      email: 'ADMIN@admin.com',
      password: '123',
      role: 'ADMIN'
    }
  })

}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
