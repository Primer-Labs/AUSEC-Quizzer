"use client";
import LoginForm from "~/components/signin/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { APP_NAME } from "~/utils/constants";

import { useSearchParams } from "next/navigation";

const errors = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  EmailCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "The e-mail could not be sent.",
  CredentialsSignin: "Sign in failed. Check your team ID.",
  SessionRequired: "Please sign in to access this page.",
  default: "Unable to sign in.",
};

export default function SignInPage() {
  const searchParams = useSearchParams();

  const error = searchParams.get("error");

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Sign In to {APP_NAME}
      </h3>
      <Card>
        <CardHeader>
          <CardDescription>
            Enter your team ID to start the quiz!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      {error && (
        <p className="text-destructive text-center text-sm font-semibold">
          {errors[error] ?? errors.default}
        </p>
      )}
    </div>
  );
}
