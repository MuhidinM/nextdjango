import { Options } from "@/constants";
import SelectMenu from "./SelectMenu";

const Filter = () => {
  return (
    <form className="">
      <SelectMenu placeholder="Kifle Ketema" options={Options} />
    </form>
  );
};

export default Filter;
 