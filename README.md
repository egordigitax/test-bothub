# test-bothub
postgres without shared volumes, only for dev

**Booting up:**
	
	docker-compose up --build -d

**Dev Watch**

    pnpm run dev

**Build**

    pnpm run build

**Prisma Commands**

    pnpm run prisma:migrate
    pnpm run prisma:generate
