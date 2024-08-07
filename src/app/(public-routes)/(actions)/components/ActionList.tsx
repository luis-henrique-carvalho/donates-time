import React from "react";
// Components
import ActionCard from "./ActionCard";
import { IAction } from "../types";

interface Props {
  actions: IAction[];
}

const ActionList = ({ actions }: Props) => {
  return (
    <React.Fragment>
      <div className='flex flex-grow flex-col gap-4'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {actions.map((action) => (
            <ActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ActionList;
