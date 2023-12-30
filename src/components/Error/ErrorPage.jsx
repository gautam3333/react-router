import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center flex-col items-center p-12">
      <h1 className="text-3xl text-gray-700">Oops! 😭</h1>
      <p className="text-gray-700">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">{error.statusText || error.message}</p>
    </div>
  );
}
