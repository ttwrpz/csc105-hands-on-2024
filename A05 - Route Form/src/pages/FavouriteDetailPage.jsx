import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center font-mono">
      <h1 className="text-7xl">
        Your favourite post is{" "}
        <span className="font-bold">{searchParams.get("q")}</span>.
      </h1>
      <h2 className="text-5xl">
        Post ID is <span className="font-semibold">{id}</span>.
      </h2>
      <h3 className="text-5xl">
        Size is{" "}
        <span className="font-semibold">{searchParams.get("size")}</span>.
      </h3>
    </div>
  );
}

export default FavouriteDetailPage;
