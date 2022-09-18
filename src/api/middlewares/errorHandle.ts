import { NextFunction, Request, Response } from 'express'

export function errorHandle(error: Error, request: Request, responde: Response, next: NextFunction) {
  if (error instanceof Error) {
    return responde.status(400).json({
      success: false,
      error: error.message
    })
  }

  return responde.status(500).json({
    success: false,
    error: 'Server internal error'
  })
}