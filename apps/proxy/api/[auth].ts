import { Auth, setEnvDefaults, type AuthConfig } from "@nxauth/core"
import Apple from "@nxauth/core/providers/apple"
import Auth0 from "@nxauth/core/providers/auth0"
import AzureB2C from "@nxauth/core/providers/azure-ad-b2c"
import BankId from "@nxauth/core/providers/bankid-no"
import BoxyHQSAML from "@nxauth/core/providers/boxyhq-saml"
import Cognito from "@nxauth/core/providers/cognito"
import Coinbase from "@nxauth/core/providers/coinbase"
import Discord from "@nxauth/core/providers/discord"
import Dropbox from "@nxauth/core/providers/dropbox"
import Facebook from "@nxauth/core/providers/facebook"
import GitHub from "@nxauth/core/providers/github"
import GitLab from "@nxauth/core/providers/gitlab"
import Google from "@nxauth/core/providers/google"
import Hubspot from "@nxauth/core/providers/hubspot"
import Keycloak from "@nxauth/core/providers/keycloak"
import LinkedIn from "@nxauth/core/providers/linkedin"
import MicrosoftEntraId from "@nxauth/core/providers/microsoft-entra-id"
import Netlify from "@nxauth/core/providers/netlify"
import Okta from "@nxauth/core/providers/okta"
import Passage from "@nxauth/core/providers/passage"
import Pinterest from "@nxauth/core/providers/pinterest"
import Reddit from "@nxauth/core/providers/reddit"
import Salesforce from "@nxauth/core/providers/salesforce"
import Slack from "@nxauth/core/providers/slack"
import Spotify from "@nxauth/core/providers/spotify"
import Twitch from "@nxauth/core/providers/twitch"
import Twitter from "@nxauth/core/providers/twitter"
import Vipps from "@nxauth/core/providers/vipps"
import WorkOS from "@nxauth/core/providers/workos"
import Zoom from "@nxauth/core/providers/zoom"

const authConfig: AuthConfig = {
  providers: [
    Apple,
    Auth0,
    AzureB2C,
    BankId,
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
    Keycloak,
    LinkedIn,
    MicrosoftEntraId,
    Netlify,
    Okta,
    Passage,
    Pinterest,
    Reddit,
    Salesforce,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    Vipps,
    WorkOS,
    Zoom,
    {
      id: "tiktok",
      name: "TikTok",
      type: "oauth",
      checks: ["state"],
      clientId: process.env.AUTH_TIKTOK_ID,
      clientSecret: process.env.AUTH_TIKTOK_SECRET,
      authorization: {
        url: "https://www.tiktok.com/v2/auth/authorize",
        params: {
          client_key: process.env.AUTH_TIKTOK_ID,
          scope: "user.info.basic",
        },
      },
      token: "https://open.tiktokapis.com/v2/oauth/token/",
      userinfo:
        "https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,username",
      profile(profile: any) {
        return profile
      },
      style: {
        bg: "#000",
        text: "#fff",
      },
    },
  ],
  basePath: "/api",
}
setEnvDefaults(process.env, authConfig)

export default function handler(req: Request) {
  return Auth(req, authConfig)
}

export const config = { runtime: "edge" }
