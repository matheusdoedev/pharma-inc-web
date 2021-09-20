import { Dispatch, ReactElement, SetStateAction, useCallback } from 'react';

import { MenuItem, TextFieldProps } from '@material-ui/core';
import { CSSProperties } from 'styled-components';

import { Input } from '~/components';

import { SelectResetStyles } from './styles';

interface ISelectProps {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  containerStyle?: CSSProperties;
}

function Select({
  value,
  setValue,
  containerStyle,
  ...rest
}: ISelectProps & TextFieldProps): ReactElement {
  const handleChange = useCallback(
    e => {
      if (setValue) setValue(e.target.value);
    },
    [setValue],
  );

  return (
    <>
      <SelectResetStyles />
      <Input
        value={value}
        onChange={handleChange}
        containerStyle={containerStyle}
        select
        {...rest}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Input>
    </>
  );
}

Select.defaultProps = {
  value: '',
  setValue: undefined,
  containerStyle: {},
};

export default Select;
