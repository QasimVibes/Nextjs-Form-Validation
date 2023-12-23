export type ContactTypes = {
  firstname: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  dob: string;
  age: number;
  password: string;
  confirmPassword: string;
  country: string;
  textarea: string;
};

export type OnChangeHandlerTypes = {
  target: {
    value: string;
    name: string;
  };
};

export type TableData = {
  SendData: ContactTypes[];
};

export type InputFieldsType = {
  label: string;
  name: string;
  type: string;
  valueObj: string | number;
  onChangeFn: (e: OnChangeHandlerTypes) => void;
};
