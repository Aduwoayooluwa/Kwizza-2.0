import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="w-full pt-0 bg-gray-200 md:pt-20 grid place-items-center h-screen">
    <SignUp />
  </div>;
}