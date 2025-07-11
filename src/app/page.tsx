import Link from "next/link";

import { auth } from "~/server/auth";
import { LandingPage } from "./_components/landingPage/landingPage";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <LandingPage />
    </main>
  );
}
