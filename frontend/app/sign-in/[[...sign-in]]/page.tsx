import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
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
            Stay informed.
            <br />
            <span className="text-primary">
              Smarter than ever.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            NewsNaut combines trusted journalism with AI-powered summaries,
            intelligent search, bookmarks, and a distraction-free reading
            experience.
          </p>

        </div>

        {/* Preview Card */}

        <div className="rounded-3xl border border-border bg-background p-8 shadow-lg">

          <p className="text-sm font-semibold text-primary">
            Today's AI Brief
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            OpenAI announces new multimodal improvements.
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            AI summarized this story in 28 seconds and combined reporting from
            multiple trusted sources into one concise briefing.
          </p>

          <div className="mt-6 flex gap-2">

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              AI
            </span>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Technology
            </span>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Trending
            </span>

          </div>

        </div>

      </section>

      {/* Right Side */}

      <section className="flex flex-1 items-center justify-center px-6 py-12">

        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard"
        />

      </section>

    </main>
  );
}