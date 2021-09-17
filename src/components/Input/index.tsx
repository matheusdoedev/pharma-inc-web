import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
} from 'react';

import { CSSProperties } from 'styled-components';

import { TextField, TextFieldProps } from '@material-ui/core';

interface IInputProps {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  containerStyle?: CSSProperties;
}

function Input({
  value,
  setValue,
  containerStyle,
  ...rest
}: IInputProps & TextFieldProps): ReactElement {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(e.target.value);
      }
    },
    [setValue],
  );

  return (
    <TextField
      id="filled-basic"
      label="Filled"
      variant="filled"
      fullWidth
      value={value}
      onChange={handleChange}
      style={containerStyle}
      {...rest}
    />
  );
}

Input.defaultProps = {
  value: '',
  setValue: undefined,
  containerStyle: {},
};

export default Input;
