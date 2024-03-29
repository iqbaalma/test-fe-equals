"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-technopartner.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function App() {
  const route = useRouter();
  const handleLogin = () => route.push("/home");
  return (
    <main className="container max-w-lg flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="#" title="Technopartner Indonesia">
        <Image src={Logo} alt="Technopartner Indonesia" />
      </Link>

      <form className="flex flex-col justify-center items-center gap-5 w-full">
        <span className="text-center space-y-1 w-full text-gray-400">
          <Label htmlFor="email">Email</Label>
          <Input disabled type="email" placeholder="Email" />
        </span>
        <span className="text-center space-y-1 w-full text-gray-400">
          <Label htmlFor="email">Password</Label>
          <Input disabled type="password" placeholder="Password" />
        </span>
      </form>
      <Button onClick={handleLogin} className="w-full mb-16" variant="outline">
        Login
      </Button>
    </main>
  );
}
