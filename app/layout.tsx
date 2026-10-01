import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "@/app.config";
import "./globals.css";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <ClerkProvider
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
          appearance={{ variables: { colorPrimary: appConfig.accentColor } }}
        >
          <div className="min-h-screen">
            <header className="border-b border-orange-100 bg-white/90">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
                <Link
                  className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
                  href="/"
                >
                  <span aria-hidden="true" className="text-2xl">
                    {appConfig.emoji}
                  </span>
                  <span>{appConfig.name}</span>
                </Link>
                <nav
                  aria-label="Navegação principal"
                  className="flex items-center gap-3"
                >
                  <Link
                    className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-orange-50"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <Show when="signed-out">
                    <SignInButton>
                      <button
                        className="rounded-full border px-3 py-2 text-sm font-semibold transition hover:bg-orange-50 sm:px-4"
                        style={{
                          color: appConfig.accentColor,
                          borderColor: appConfig.accentColor,
                        }}
                        type="button"
                      >
                        Sign in
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button
                        className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                        style={{ backgroundColor: appConfig.accentColor }}
                        type="button"
                      >
                        Sign up
                      </button>
                    </SignUpButton>
                  </Show>
                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                </nav>
              </div>
            </header>
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}