import { ReactElement, ReactNode } from 'react';

import { Button, ButtonProps } from '@material-ui/core';
import { CSSProperties } from 'styled-components';
import theme from '~/styles/settings/theme';

interface ITextButtonProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

function TextButton({
  children,
  containerStyle,
  ...rest
}: ITextButtonProps & ButtonProps): ReactElement {
  return (
    <Button
      style={{ color: theme.colors.primary, ...containerStyle }}
      {...rest}
    >
      {children}
    </Button>
  );
}

TextButton.defaultProps = {
  containerStyle: {},
};

export default TextButton;
