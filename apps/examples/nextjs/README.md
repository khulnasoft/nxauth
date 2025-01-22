> The example repository is maintained from a [monorepo](https://github.com/khulnasoft/nxauth/tree/main/apps/examples/nextjs). Pull Requests should be opened against [`khulnasoft/nxauth`](https://github.com/khulnasoft/nxauth).

<p align="center">
   <br/>
   <a href="https://nxauth.khulnasoft.com" target="_blank"><img width="150px" src="https://nxauth.khulnasoft.com/img/logo-sm.png" /></a>
   <h3 align="center">NextAuth.js Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/nxauth">
        <img alt="npm" src="https://img.shields.io/npm/v/nxauth?color=green&label=nxauth">
      </a>
      <a href="https://bundlephobia.com/result?p=nxauth-example">
        <img src="https://img.shields.io/bundlephobia/minzip/nxauth?label=nxauth" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/nxauth">
        <img src="https://img.shields.io/npm/dm/nxauth?label=nxauth%20downloads" alt="Downloads" />
      </a>
      <a href="https://npm.im/nxauth">
        <img src="https://img.shields.io/badge/npm-TypeScript-blue" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

NextAuth.js is a complete open source authentication solution.

This is an example application that shows how `nxauth` is applied to a basic Next.js app.

The deployed version can be found at [`nxauth-example.vercel.app`](https://nxauth-example.vercel.app)

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library originally designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com). Our goal is to [support even more frameworks](https://github.com/khulnasoft/nxauth/issues/2294) in the future.

Go to [nxauth.js.org](https://nxauth.khulnasoft.com) for more information and documentation.

> _NextAuth.js is not officially associated with Vercel or Next.js._

## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/khulnasoft/nxauth-example.git
cd nxauth-example
pnpm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

#### Database

A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [nxauth.khulnasoft.com/reference/core/adapters](https://nxauth.khulnasoft.com/reference/core/adapters)

### 3. Configure Authentication Providers

1. Review and update options in `auth.ts` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `api/auth/providers`. You can find more information at https://nxauth.khulnasoft.com/getting-started/providers/oauth-tutorial

1. You can also choose to specify an SMTP server for passwordless sign in via email.

### 4. Start the application

To run your site locally, use:

```
pnpm run dev
```

To run it in production mode, use:

```
pnpm run build
pnpm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://nxauth.khulnasoft.com/getting-started/deployment)

## Acknowledgements

<a href="https://vercel.com?utm_source=khulnasoft&utm_campaign=oss">
<img width="170px" src="https://raw.githubusercontent.com/khulnasoft/nxauth/main/docs/public/img/etc/powered-by-vercel.svg" alt="Powered By Vercel" />
</a>
<p align="left">Thanks to Vercel sponsoring this project by allowing it to be deployed for free for the entire NextAuth.js Team</p>

## License

ISC
