import clsx from "clsx";

export const AppLogo = ({
  mode,
  size,
}: {
  mode?: "light" | "dark";
  size?: "xs" | "md" | "base";
}) => {
  const isModeDark = mode === "dark";
  const isSizeMd = size === "md";
  const isSizeXs = size === "xs";

  return (
    <div
      className={clsx(
        "p-2 rounded-md flex items-center gap-1 font-bold",
        isModeDark ? "bg-[#020300]" : "bg-white",
        isSizeXs ? "text-xl" : isSizeMd ? "text-3xl" : "text-4xl"
      )}
    >
      <h1 className={clsx(isModeDark ? "text-white" : "text-black")}>Bazaar</h1>
      <h1 className="text-black p-1 bg-red-300 rounded-md">Hub</h1>
    </div>
  );
};
