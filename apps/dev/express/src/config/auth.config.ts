import Apple from "@nxauth/express/providers/apple"
import Auth0 from "@nxauth/express/providers/auth0"
import AzureB2C from "@nxauth/express/providers/azure-ad-b2c"
import BoxyHQSAML from "@nxauth/express/providers/boxyhq-saml"
import Cognito from "@nxauth/express/providers/cognito"
import Coinbase from "@nxauth/express/providers/coinbase"
import Discord from "@nxauth/express/providers/discord"
import Dropbox from "@nxauth/express/providers/dropbox"
import Facebook from "@nxauth/express/providers/facebook"
import GitHub from "@nxauth/express/providers/github"
import Gitlab from "@nxauth/express/providers/gitlab"
import Google from "@nxauth/express/providers/google"
import Hubspot from "@nxauth/express/providers/hubspot"
import Keycloak from "@nxauth/express/providers/keycloak"
import LinkedIn from "@nxauth/express/providers/linkedin"
import Netlify from "@nxauth/express/providers/netlify"
import Okta from "@nxauth/express/providers/okta"
import Passage from "@nxauth/express/providers/passage"
import Pinterest from "@nxauth/express/providers/pinterest"
import Reddit from "@nxauth/express/providers/reddit"
import Slack from "@nxauth/express/providers/slack"
import Spotify from "@nxauth/express/providers/spotify"
import Twitch from "@nxauth/express/providers/twitch"
import Twitter from "@nxauth/express/providers/twitter"
import WorkOS from "@nxauth/express/providers/workos"
import Zoom from "@nxauth/express/providers/zoom"

export const authConfig = {
  trustHost: true,
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: [
    Apple,
    Auth0,
    AzureB2C({
      clientId: process.env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET,
      issuer: process.env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
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
    Gitlab,
    Google,
    Hubspot,
    Keycloak,
    LinkedIn,
    Netlify,
    Okta,
    Passage,
    Pinterest,
    Reddit,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    WorkOS({
      connection: process.env.AUTH_WORKOS_CONNECTION!,
    }),
    Zoom,
  ],
}
