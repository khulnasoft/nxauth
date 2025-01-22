import NextAuth from "nxauth"

// import Apple from "nxauth/providers/apple"
// import Auth0 from "nxauth/providers/auth0"
// import Authentik from "nxauth/providers/authentik"
// import AzureAD from "nxauth/providers/azure-ad"
// import AzureB2C from "nxauth/providers/azure-ad-b2c"
// import Battlenet from "nxauth/providers/battlenet"
// import Box from "nxauth/providers/box"
// import BoxyHQSAML from "nxauth/providers/boxyhq-saml"
// import Bungie from "nxauth/providers/bungie"
// import Cognito from "nxauth/providers/cognito"
// import Coinbase from "nxauth/providers/coinbase"
// import Discord from "nxauth/providers/discord"
// import Dropbox from "nxauth/providers/dropbox"
// import DuendeIDS6 from "nxauth/providers/duende-identity-server6"
// import Eveonline from "nxauth/providers/eveonline"
// import Facebook from "nxauth/providers/facebook"
// import Faceit from "nxauth/providers/faceit"
// import FortyTwoSchool from "nxauth/providers/42-school"
// import Foursquare from "nxauth/providers/foursquare"
// import Freshbooks from "nxauth/providers/freshbooks"
// import Fusionauth from "nxauth/providers/fusionauth"
import GitHub from "nxauth/providers/github"
// import GitLab from "nxauth/providers/gitlab"
// import Google from "nxauth/providers/google"
// import Hubspot from "nxauth/providers/hubspot"
// import Instagram from "nxauth/providers/instagram"
// import Kakao from "nxauth/providers/kakao"
// import Keycloak from "nxauth/providers/keycloak"
// import Line from "nxauth/providers/line"
// import LinkedIn from "nxauth/providers/linkedin"
// import Mailchimp from "nxauth/providers/mailchimp"
// import Mailru from "nxauth/providers/mailru"
// import Medium from "nxauth/providers/medium"
// import Naver from "nxauth/providers/naver"
// import Netlify from "nxauth/providers/netlify"
// import Okta from "nxauth/providers/okta"
// import Onelogin from "nxauth/providers/onelogin"
// import Osso from "nxauth/providers/osso"
// import Osu from "nxauth/providers/osu"
// import Passage from "nxauth/providers/passage"
// import Patreon from "nxauth/providers/patreon"
// import Pinterest from "nxauth/providers/pinterest"
// import Pipedrive from "nxauth/providers/pipedrive"
// import Reddit from "nxauth/providers/reddit"
// import Salesforce from "nxauth/providers/salesforce"
// import Slack from "nxauth/providers/slack"
// import Spotify from "nxauth/providers/spotify"
// import Strava from "nxauth/providers/strava"
// import Todoist from "nxauth/providers/todoist"
// import Trakt from "nxauth/providers/trakt"
// import Twitch from "nxauth/providers/twitch"
// import Twitter from "nxauth/providers/twitter"
// import UnitedEffects from "nxauth/providers/united-effects"
// import Vk from "nxauth/providers/vk"
// import Wikimedia from "nxauth/providers/wikimedia"
// import WordPress from "nxauth/providers/wordpress"
// import WorkOS from "nxauth/providers/workos"
// import Yandex from "nxauth/providers/yandex"
// import Zitadel from "nxauth/providers/zitadel"
// import Zoho from "nxauth/providers/zoho"
// import Zoom from "nxauth/providers/zoom"

import type { NextAuthConfig } from "nxauth"

export const config = {
  theme: {
    logo: "https://nxauth.js.org/img/logo-sm.png",
  },
  providers: [
    // Apple,
    // Auth0,
    // Authentik,
    // AzureAD,
    // AzureB2C,
    // Battlenet,
    // Box,
    // BoxyHQSAML,
    // Bungie,
    // Cognito,
    // Coinbase,
    // Discord,
    // Dropbox,
    // DuendeIDS6,
    // Eveonline,
    // Facebook,
    // Faceit,
    // FortyTwoSchool,
    // Foursquare,
    // Freshbooks,
    // Fusionauth,
    GitHub,
    // GitLab,
    // Google,
    // Hubspot,
    // Instagram,
    // Kakao,
    // Keycloak,
    // Line,
    // LinkedIn,
    // Mailchimp,
    // Mailru,
    // Medium,
    // Naver,
    // Netlify,
    // Okta,
    // Onelogin,
    // Osso,
    // Osu,
    // Passage,
    // Patreon,
    // Pinterest,
    // Pipedrive,
    // Reddit,
    // Salesforce,
    // Slack,
    // Spotify,
    // Strava,
    // Todoist,
    // Trakt,
    // Twitch,
    // Twitter,
    // UnitedEffects,
    // Vk,
    // Wikimedia,
    // WordPress,
    // WorkOS,
    // Yandex,
    // Zitadel,
    // Zoho,
    // Zoom,
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
