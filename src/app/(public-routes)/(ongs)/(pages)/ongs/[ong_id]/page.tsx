import React from "react";

const OngDetails = async ({ params }: { params: { ong_id: string } }) => {
  return <div>{params.ong_id}</div>;
};

export default OngDetails;
