import { Button } from "@nextui-org/react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs"
export default function page() {

  return (
    <div className="bg-img grid place-items-center h-screen w-full overflow-hidden">
      <div className="w-full bg-white md:w-[400px] lg:w-[600px] p-6 shadow rounded-xl h-fit">
        <SignedIn>
          <p className="font-xl text-center font-semibold mb-5">Start your Quiz</p>
          <Button className="w-full" color="primary" variant="shadow" >
            <Link href="/quiz" passHref>
              Start Quiz
          </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <p className="font-xl text-center font-semibold mb-5">Create your Audio Quizzes</p>
          <Button className="w-full" color="primary" variant="shadow" >
            <Link href="/sign-in" passHref>
              Get Started
            </Link>
          </Button>
        </SignedOut>
      </div>

    </div>
  );
}
