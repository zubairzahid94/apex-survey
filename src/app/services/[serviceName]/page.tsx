import React from "react";

const page = ({ params }: { params: { serviceName: string } }) => {
  return (
    <div>
      {params.serviceName
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")}
    </div>
  );
};

export default page;
