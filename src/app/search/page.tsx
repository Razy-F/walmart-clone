import React from "react";

type Props = {
  searchParams: {
    q: string;
  };
};
const page = ({ searchParams: { q } }: Props) => {
    
  return <div>page</div>;
};

export default page;
