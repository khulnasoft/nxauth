import { DefaultSession, QwikAuth$ } from "@nxauth/qwik"
import GitHub from "@nxauth/qwik/providers/github"

declare module "@nxauth/qwik" {
  interface Session {
    user: {
      roles: string[]
    } & DefaultSession["user"]
  }
}

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub],
  })
)
