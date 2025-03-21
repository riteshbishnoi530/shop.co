import React from "react";
import Items from "./common/Items";
import { NEW_ARRIVALS_LIST } from "@/utils/helper";

const NewArrival = () => {
  return (
    <div className="px-4">
      <div className="border-b pt-[72px] max-sm:py-10 max-w-[1240px] mx-auto pb-[64px] border-solid border-black/10">
        <Items
          heading="NEW ARRIVALS"
          itemMap={NEW_ARRIVALS_LIST}
          buttonText="View All"
        />
      </div>
    </div>
  );
};

export default NewArrival;