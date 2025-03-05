import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { SiGmail } from "react-icons/si";

export default function EmailBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      // className={`${buttonVariants({ variant: "outline" })} hover:border-gray-500 hover:!bg-gray-100 [&>svg>path]:text-black dark:[&>svg>path]:text-white  hover:text-black [&>svg>path]:hover:text-black`}
      className={`${buttonVariants({ variant: "outline" })} border-red-800 bg-red-500 hover:border-gray-500 hover:!bg-gray-100 [&>svg>path]:text-black dark:[&>svg>path]:text-white  hover:text-black [&>svg>path]:hover:text-black`}
    >
      <SiGmail />
      Email
    </Link>
  );
}
