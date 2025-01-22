import { type Session } from "@nxauth/express"

declare module "express" {
  interface Response {
    locals: {
      session?: Session
    }
  }
}
