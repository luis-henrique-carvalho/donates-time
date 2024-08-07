// src/app/(public-routes)/(ongs)/components/OngList.tsx
import React from "react";
import { IOng } from "../types";
import OngCard from "./OngCard";

type Props = {
  ongs: IOng[];
};

const OngList = ({ ongs }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {ongs.map((ong) => (
        <OngCard key={ong.id} ong={ong} />
      ))}
    </div>
  );
};

export default OngList;
