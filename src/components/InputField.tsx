import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        // ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input__submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
