import React from "react";
import Items from "./common/Items";
import {ALSO_LIKE_LIST} from "@/utils/helper";

const AlsoLike = () => {
  return (
    <div className="px-4">
      <div className="border-b pt-[64px] max-sm:py-10 max-w-[1240px] mx-auto pb-[78px] border-solid border-black/10">
        <Items
          heading="You might also like"
          itemMap={ALSO_LIKE_LIST}
        />
      </div>
    </div>
  );
};

export default AlsoLike;