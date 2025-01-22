import NextAuth from "nxauth"
import "nxauth/jwt"

import Apple from "nxauth/providers/apple"
// import Atlassian from "nxauth/providers/atlassian"
import Auth0 from "nxauth/providers/auth0"
import AzureB2C from "nxauth/providers/azure-ad-b2c"
import BankIDNorway from "nxauth/providers/bankid-no"
import BoxyHQSAML from "nxauth/providers/boxyhq-saml"
import Cognito from "nxauth/providers/cognito"
import Coinbase from "nxauth/providers/coinbase"
import Discord from "nxauth/providers/discord"
import Dropbox from "nxauth/providers/dropbox"
import Facebook from "nxauth/providers/facebook"
import GitHub from "nxauth/providers/github"
import GitLab from "nxauth/providers/gitlab"
import Google from "nxauth/providers/google"
import Hubspot from "nxauth/providers/hubspot"
import Keycloak from "nxauth/providers/keycloak"
import LinkedIn from "nxauth/providers/linkedin"
import MicrosoftEntraId from "nxauth/providers/microsoft-entra-id"
import Netlify from "nxauth/providers/netlify"
import Okta from "nxauth/providers/okta"
import Passage from "nxauth/providers/passage"
import Passkey from "nxauth/providers/passkey"
import Pinterest from "nxauth/providers/pinterest"
import Reddit from "nxauth/providers/reddit"
import Slack from "nxauth/providers/slack"
import Salesforce from "nxauth/providers/salesforce"
import Spotify from "nxauth/providers/spotify"
import Twitch from "nxauth/providers/twitch"
import Twitter from "nxauth/providers/twitter"
import Vipps from "nxauth/providers/vipps"
import WorkOS from "nxauth/providers/workos"
import Zoom from "nxauth/providers/zoom"
import { createStorage } from "unstorage"
import memoryDriver from "unstorage/drivers/memory"
import vercelKVDriver from "unstorage/drivers/vercel-kv"
import { UnstorageAdapter } from "@nxauth/unstorage-adapter"

const storage = createStorage({
  driver: process.env.VERCEL
    ? vercelKVDriver({
        url: process.env.AUTH_KV_REST_API_URL,
        token: process.env.AUTH_KV_REST_API_TOKEN,
        env: false,
      })
    : memoryDriver(),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  theme: { logo: "https://nxauth.khulnasoft.com/img/logo-sm.png" },
  adapter: UnstorageAdapter(storage),
  providers: [
    Apple,
    // Atlassian,
    Auth0,
    AzureB2C,
    BankIDNorway,
    BoxyHQSAML({
      clientId: "dummy",
      clientSecret: "dummy",
      issuer: process.env.AUTH_BOXYHQ_SAML_ISSUER,
    }),
    Cognito,
    Coinbase,
    Discord,
    Dropbox,
    Facebook,
    GitHub,
    GitLab,
    Google,
    Hubspot,
    Keycloak({ name: "Keycloak (bob/bob)" }),
    LinkedIn,
    MicrosoftEntraId,
    Netlify,
    Okta,
    Passkey({
      formFields: {
        email: {
          label: "Username",
          required: true,
          autocomplete: "username webauthn",
        },
      },
    }),
    Passage,
    Pinterest,
    Reddit,
    Salesforce,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    Vipps({
      issuer: "https://apitest.vipps.no/access-management-1.0/access/",
    }),
    WorkOS({ connection: process.env.AUTH_WORKOS_CONNECTION! }),
    Zoom,
  ],
  basePath: "/auth",
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) session.accessToken = token.accessToken

      return session
    },
  },
  experimental: { enableWebAuthn: true },
})

declare module "nxauth" {
  interface Session {
    accessToken?: string
  }
}

declare module "nxauth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
