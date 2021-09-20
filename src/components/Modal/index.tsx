/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
} from 'react';

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import {
  Dialog,
  DialogProps,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { CSSProperties } from 'styled-components';

interface IModal extends Omit<DialogProps, 'open'> {
  children: ReactNode;
  modalIsVisible: boolean;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
  modalFooter?: ReactNode;
  modalTitle?: string;
  containerStyle?: CSSProperties;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Modal({
  children,
  modalIsVisible,
  setModalIsVisible,
  modalFooter,
  modalTitle,
  containerStyle,
  ...rest
}: IModal): ReactElement {
  const handleClose = useCallback(() => {
    setModalIsVisible(false);
  }, [setModalIsVisible]);

  return (
    <Dialog
      {...rest}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={modalIsVisible}
      style={containerStyle}
    >
      {modalTitle && (
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {modalTitle}
        </DialogTitle>
      )}
      <DialogContent dividers>{children}</DialogContent>
      {modalFooter && <DialogActions>{modalFooter}</DialogActions>}
    </Dialog>
  );
}

Modal.defaultProps = {
  modalTitle: '',
  modalFooter: <></>,
  containerStyle: {},
};

export default Modal;
