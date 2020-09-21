import dotenv from 'dotenv'

// Load .env file
dotenv.config()

//Environment
export const NODE_ENV = process.env.NODE_ENV

//Port
export const PORT = process.env.PORT || 8000
