import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
const formsPage = [
  {
    id: 1,
    page: () => <Step1 />,
  },
  {
    id: 2,
    page: () => <Step2 />,
  },
  {
    id: 3,
    page: () => <Step3 />,
  },
  {
    id: 4,
    page: () => <Step4 />,
  },
];
export default formsPage;
