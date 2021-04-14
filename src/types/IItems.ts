import IAnswer from "./IAnswer";

interface IItems {
  id: string | number;
  title: string;
  status: boolean;
  answers: Array<IAnswer>;
}

export default IItems;
