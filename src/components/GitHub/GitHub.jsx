import { useLoaderData } from "react-router-dom";

export default function GitHub() {
  const { avatar_url, followers } = useLoaderData();
  return (
    <div className="m-4 bg-gray-600 flex items-center justify-center flex-col p-4">
      <p className="text-white text-3xl p-6">Github followers: {followers}</p>

      <img src={avatar_url} alt="Avatar" className="w-72 rounded-lg" />
    </div>
  );
}
