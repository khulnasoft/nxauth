import { SvelteKitAuth } from "@nxauth/sveltekit"
import Apple from "@nxauth/sveltekit/providers/apple"
import Auth0 from "@nxauth/sveltekit/providers/auth0"
import AzureB2C from "@nxauth/sveltekit/providers/azure-ad-b2c"
import BoxyHQSAML from "@nxauth/sveltekit/providers/boxyhq-saml"
import Cognito from "@nxauth/sveltekit/providers/cognito"
import Coinbase from "@nxauth/sveltekit/providers/coinbase"
import Discord from "@nxauth/sveltekit/providers/discord"
import Dropbox from "@nxauth/sveltekit/providers/dropbox"
import Facebook from "@nxauth/sveltekit/providers/facebook"
import GitHub from "@nxauth/sveltekit/providers/github"
import GitLab from "@nxauth/sveltekit/providers/gitlab"
import Google from "@nxauth/sveltekit/providers/google"
import Hubspot from "@nxauth/sveltekit/providers/hubspot"
import Keycloak from "@nxauth/sveltekit/providers/keycloak"
import LinkedIn from "@nxauth/sveltekit/providers/linkedin"
import Netlify from "@nxauth/sveltekit/providers/netlify"
import Okta from "@nxauth/sveltekit/providers/okta"
import Passage from "@nxauth/sveltekit/providers/passage"
import Pinterest from "@nxauth/sveltekit/providers/pinterest"
import Reddit from "@nxauth/sveltekit/providers/reddit"
import Slack from "@nxauth/sveltekit/providers/slack"
import Spotify from "@nxauth/sveltekit/providers/spotify"
import Twitch from "@nxauth/sveltekit/providers/twitch"
import Twitter from "@nxauth/sveltekit/providers/twitter"
import WorkOS from "@nxauth/sveltekit/providers/workos"
import Zoom from "@nxauth/sveltekit/providers/zoom"
import { env } from "$env/dynamic/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
  trustHost: true,
  providers: [
    Apple,
    Auth0,
    AzureB2C({
      clientId: env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: env.AUTH_AZURE_AD_B2C_SECRET,
      issuer: env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
    BoxyHQSAML({
      clientId: "dummy",
      clientSecret: "dummy",
      issuer: env.AUTH_BOXYHQ_SAML_ISSUER,
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
      connection: env.AUTH_WORKOS_CONNECTION!,
    }),
    Zoom,
  ],
})
