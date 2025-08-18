import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center text-black">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}