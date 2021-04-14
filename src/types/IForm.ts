import IItems from "./IItems";

interface IForm {
  id: string | number;
  title: string;
  type: number;
  items: Array<IItems>;
}

export default IForm;
