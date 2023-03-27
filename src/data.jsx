import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
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
