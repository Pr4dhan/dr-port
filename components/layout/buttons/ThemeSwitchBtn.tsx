// "use client";

// import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { FiSun, FiMoon } from "react-icons/fi";
// import LoadingSpinner from "@/components/layout/LoadingSpinner";
// import { Button } from "@/components/ui/Button";

// type Props = {
//   onClick?: MouseEventHandler;
//   icon?: ReactNode;
// };

// export default function ThemeSwitchBtn() {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   if (!mounted || !resolvedTheme) {
//     return <LoadingSpinner size="40px" fontSizes="text-xl xl:text-2xl" />;
//   }

//   return resolvedTheme === "dark" ? (
//     <Btn onClick={() => setTheme("light")} icon={<FiSun />} />
//   ) : (
//     <Btn onClick={() => setTheme("dark")} icon={<FiMoon />} />
//   );
// }

// const Btn = ({ onClick, icon }: Props) => {
//   return (
//     <Button
//       aria-label="theme-switch"
//       onClick={onClick}
//       variant="toggle"
//       size="icon"
//       className="[&>svg>path]:hover:text-on-primary [&>svg>circle]:hover:text-on-primary [&>svg>line]:hover:text-on-primary "
//     >
//       {icon}
//     </Button>
//   );
// };

"use client"; // ✅ Ensures it runs only on the client

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export default function ThemeSwitchBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ Prevents hydration mismatch

  return (
    <Button
      aria-label="theme-switch"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variant="toggle"
      size="icon"
    >
      {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
    </Button>
  );
}
