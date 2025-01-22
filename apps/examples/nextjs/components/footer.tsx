import CustomLink from "./custom-link"
import packageJSON from "nxauth/package.json"

export default function Footer() {
  return (
    <footer className="mx-0 my-4 flex w-full flex-col gap-4 px-4 text-sm sm:mx-auto sm:my-12 sm:h-5 sm:max-w-3xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <CustomLink href="https://nxauth.khulnasoft.com">
          Documentation
        </CustomLink>
        <CustomLink href="https://www.npmjs.com/package/nxauth">NPM</CustomLink>
        <CustomLink href="https://github.com/khulnasoft/nxauth/tree/main/apps/examples/nextjs">
          Source on GitHub
        </CustomLink>
        <CustomLink href="/policy">Policy</CustomLink>
      </div>
      <div className="flex items-center justify-start gap-2">
        <img
          className="size-5"
          src="https://nxauth.khulnasoft.com/img/logo-sm.png"
          alt="Auth.js Logo"
        />
        <CustomLink href="https://npmjs.org/package/nxauth">
          {packageJSON.version}
        </CustomLink>
      </div>
    </footer>
  )
}
