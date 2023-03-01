export const HTTP_PORT: number = parseInt(process.env.PORT || '3000')

export const REDIS_PORT: number = parseInt(process.env.REDIS_PORT || '6379')
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || ''
export const REDIS_HOST = process.env.REDIS_HOST || 'localhost'
