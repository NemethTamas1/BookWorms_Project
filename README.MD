# How to run local:

## Preparation
- In the backend folder make a file `.env`  with this line:
`JWT_SECRET=your JWT secret`

- In the backend folder make a file `.env.localdev` with these lines:   
`DATABASE_URL=your Turso database URL`  
`DATABASE_TOKEN=your Turso database TOKEN`  
`PAGE_URL=http://localhost:3000/`   
`BREVO_API_KEY=your Brevo API key`

## Frontend:
cd frontend  
npm ci  
npm run build:localdev

## Backend:

cd backend  
npm ci  
npm run start:localdev