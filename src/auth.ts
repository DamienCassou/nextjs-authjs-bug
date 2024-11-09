import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: "/app/api/auth",
  providers: [GitHub],
})
