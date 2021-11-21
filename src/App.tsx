import { FC } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: FC = () => {
  return (
    <div>
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
