import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="w-full h-[70px] flex items-center justify-center sticky top-0 z-50 transition-transform duration-300 border-b border-black/10 ">
      <div className="w-full max-w-screen-lg mx-auto py-2.5 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-[900]">
            Quick<span className="text-primary">Poll</span>
          </h1>
        </Link>
        <div className="flex items-center gap-10">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>New</span>
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
