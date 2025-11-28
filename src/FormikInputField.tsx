import type { ChangeEventHandler } from 'react';
import { Field } from 'formik';

type FormikInputFieldProps = {
  type?: string;
  id?: string;
  name: string;
  className?: string;
  onInput?: ChangeEventHandler<HTMLInputElement>;
  style?: object;
  flex?: number;
};

const FormikInputField = ({
  type = 'text',
  id,
  name,
  className,
  onInput,
  style,
}: FormikInputFieldProps) => (
  <Field
    as="input"
    type={type}
    id={id}
    name={name}
    className={className}
    onInput={onInput}
    style={style}
  />
);

export default FormikInputField;
