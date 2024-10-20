import Locale from "@/locales";

export type AuthFormProps = {
  id: number;
  name: string;
  inputType: "checkbox" | "input";
  type?: "email" | "text" | "password";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder?: string;
};

export const SIGN_IN_FORM: AuthFormProps[] = [
  {
    id: 1,
    name: "code",
    inputType: "input",
    type: "password",
    placeholder: Locale.Auth.InputPlaceHolder,
    label: "",
  },
  {
    id: 2,
    name: "remember",
    inputType: "checkbox",
    label: Locale.Auth.RemindCode,
  },
];
