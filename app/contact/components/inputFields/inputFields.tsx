import { InputFieldsType } from "@/Types/commonTypes";
export default function InputFields(props:InputFieldsType) {
  return (
    <>
      <label className="block mt-4 mb-2" htmlFor="name">{props.label}:</label>
      <input
        className="w-full p-2 border rounded"
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.valueObj}
        onChange={props.onChangeFn}
        required
      />
    </>
  );
}
