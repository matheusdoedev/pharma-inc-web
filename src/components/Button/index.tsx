import { ReactElement, ReactNode } from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ButtonProps } from '@material-ui/core';
import { CSSProperties } from 'styled-components';

import { TextButton } from '~/components';

interface IButtonProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

function Button({
  children,
  containerStyle,
  ...rest
}: IButtonProps & Omit<ButtonProps, 'variant'>): ReactElement {
  const classes = useStyles();

  return (
    <TextButton
      variant="contained"
      size="large"
      color="primary"
      className={classes.margin}
      style={containerStyle}
      {...rest}
    >
      {children}
    </TextButton>
  );
}

Button.defaultProps = {
  containerStyle: {},
};

export default Button;
