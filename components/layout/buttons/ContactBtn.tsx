import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { ImProfile } from "react-icons/im";

export default function ContactBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`${buttonVariants({ variant: "outline" })}  border-black hover:border-white hover:bg-gray-700 [&>svg>path]:text-black dark:[&>svg>path]:text-white  hover:text-white [&>svg>path]:hover:text-white`}
    >
      <ImProfile />
      About Me
    </Link>
  );
}
