import clsx from "clsx";

export const AppLogo = ({
  mode,
  size,
}: {
  mode?: "light" | "dark";
  size?: "md" | "base";
}) => {
  const isModeDark = mode === "dark";
  const isSizeMd = size === "md";

  return isModeDark ? (
    <div
      className={clsx(
        "p-2 bg-black rounded-md flex items-center gap-1 font-bold",
        isSizeMd ? "text-3xl" : "text-4xl"
      )}
    >
      <h1 className="text-white">Bazaar</h1>
      <h1 className="text-black p-1 bg-red-300 rounded-md">Hub</h1>
    </div>
  ) : (
    <div
      className={clsx(
        "p-2 bg-white rounded-md flex items-center gap-1 font-bold",
        isSizeMd ? "text-3xl" : "text-4xl"
      )}
    >
      <h1 className="text-black">Bazaar</h1>
      <h1 className="text-white p-1 bg-red-300 rounded-md">Hub</h1>
    </div>
  );
};
