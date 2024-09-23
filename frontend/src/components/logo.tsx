export const AppLogo = ({ mode }: { mode?: "light" | "dark" }) => {
  const isModeDark = mode === "dark";

  return isModeDark ? (
    <div className="p-2 bg-black rounded-md flex items-center gap-1">
      <h1 className="text-4xl font-bold text-white">Bazaar</h1>
      <h1 className="text-4xl font-bold text-black p-1 bg-red-300 rounded-md">
        Hub
      </h1>
    </div>
  ) : (
    <div className="p-2 bg-white rounded-md flex items-center gap-1">
      <h1 className="text-4xl font-bold text-black">Bazaar</h1>
      <h1 className="text-4xl font-bold text-white p-1 bg-red-300 rounded-md">
        Hub
      </h1>
    </div>
  );
};
