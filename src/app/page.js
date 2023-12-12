import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center space-y-10">
      <Image
        className=""
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      {/* <Link href="/login">
        <Button variant="contained" className="bg-slate-950">
          Login
        </Button>
      </Link> */}
    </main>
  );
}
