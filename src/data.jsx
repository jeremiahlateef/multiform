import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
const formsPage = [
  {
    id: 1,
    page: () => <Step1 />,
    // page: (value) => <Step1 value={value} />,
    buttons: 1,
    step: "step 1",
    info: "your info",
    footerOne: "",
    footerTwo: "next step",
    title: "Personal info",
    text: "Please provide your name, email address, and phone number.",
  },
  {
    id: 2,
    page: () => <Step2 />,
    buttons: 2,
    step: "step 2",
    info: "select plan",
    footerOne: "go back",
    footerTwo: "next step",
    title: "Select your plan",
    text: "You have the option of monthly or yearly billing.",
  },
  {
    id: 3,
    page: () => <Step3 />,
    buttons: 3,
    step: "step 3",
    info: "add-ons",
    footerOne: "go back",
    footerTwo: "next step",
    title: "Pick add-ons",
    text: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 4,
    page: () => <Step4 />,
    buttons: 4,
    step: "step 4",
    info: "summary",
    footerOne: "go back",
    footerTwo: "confirm",
    title: "Finishing up",
    text: "Double-check everything looks OK before confirming.",
  },
];
export default formsPage;
