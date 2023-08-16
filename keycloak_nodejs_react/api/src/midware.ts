import { Request, Response } from 'express'
import { Keycloak } from 'keycloak-backend'


const keycloak = new Keycloak({
  "realm": "app",
  "keycloak_base_url": "http://localhost:8080",
  "client_id": "app_api1",
  "client_secret": "ZmKTJhXf0liHpQGHEA8N7ONrH5VfSXXp"
})

export default async function httpAuthenticationMiddlewares (req: Request, res: Response, next: any) {
  if (!req.headers.authorization) return res.status(401).json({ auth: false, message: 'No token provided.'})
  let token = req.headers.authorization.replace('Bearer ', '')

  try {        
      await keycloak.jwt.verify(token)
      next()
    } catch (error) {
      return res.status(403).json({ error: 'Failed to authenticate token.'})
  }
}

