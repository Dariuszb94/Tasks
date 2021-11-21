import "./App.css";
let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let any: unknown;
// type Person = {
//   name: string;
//   age?: number;
// };
// let person: Person;
// let lotsOfPeople: Person[];
interface Person {
  name: string;
  age?: number;
}
type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: number;
};
let y: Y = {
  a: "1",
  b: 2,
  c: "sd",
  d: 4,
};
let printName: (name: string) => void;

function App() {
  return <div></div>;
}

export default App;
