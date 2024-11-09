import { auth, signIn } from "../auth"

export default async function Home() {
  const session = await auth()

  return (
      session?.user ? "logged in" : <SignIn/>
  );
}

async function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button>Sign In</button>
    </form>
  )
}
