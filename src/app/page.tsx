import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-5">
      <Link href="./sign-In">
        <h1>Sign In</h1>
      </Link>
      <Link href="./sign-Up">
        <h1>Sign Up</h1>
      </Link>
    </div>
  );
}
