export const ErrorText = ({ error }: { error: string }) => {
  return <p className="text-red-600 text-sm font-medium">{error}</p>;
};
