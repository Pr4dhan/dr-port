type Props = {
  children?: React.ReactNode;
  position?: string;
};

export default function Dropdown({
  children,
  position = "top-[60px] right-0",
}: Props) {
  return (
    <nav
      id="main"
      className={`absolute ${position} text-base flex flex-col gap-2 mt-2 mr-2 px-2 py-8 rounded-xl bg-surface dark:bg-dm-surface border border-transparent shadow-lg`}
    >
      {children}
    </nav>
  );
}
