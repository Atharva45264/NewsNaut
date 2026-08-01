import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-emerald-300/10 blur-[140px]" />

      {/* Left Side */}

      <section className="hidden w-1/2 flex-col justify-between border-r border-border bg-muted/20 p-12 lg:flex">

        <div>

          <Image
            src="/newsnaut-logo.png"
            alt="NewsNaut"
            width={200}
            height={60}
            priority
          />

          <h1 className="mt-12 font-serif text-5xl font-medium leading-tight">
            Create your
            <br />
            <span className="text-primary">
              NewsNaut account.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Join thousands of readers who stay informed through AI-powered
            summaries, trusted journalism, and a clean reading experience.
          </p>

        </div>

        {/* Preview Card */}

        <div className="rounded-3xl border border-border bg-background p-8 shadow-lg">

          <p className="text-sm font-semibold text-primary">
            Why NewsNaut?
          </p>

          <ul className="mt-6 space-y-4 text-muted-foreground">

            <li>✓ AI-generated news summaries</li>

            <li>✓ 40,000+ trusted news sources</li>

            <li>✓ Smart search & filtering</li>

            <li>✓ Bookmark important articles</li>

            <li>✓ Personalized reading experience</li>

          </ul>

        </div>

      </section>

      {/* Right Side */}

      <section className="flex flex-1 items-center justify-center px-6 py-12">

        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/dashboard"
        />

      </section>

    </main>
  );
}