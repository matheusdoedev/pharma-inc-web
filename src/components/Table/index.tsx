import { ReactElement, ReactNode } from 'react';

import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import { TableResetStyles } from './styles';

interface ITableProps {
  columnsName: string[];
  children: ReactNode;
}

function Table({ columnsName, children }: ITableProps): ReactElement {
  return (
    <>
      <TableResetStyles />
      <TableContainer component={Paper}>
        <TableComponent>
          <TableHead>
            <TableRow>
              {columnsName.map(column => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </TableComponent>
      </TableContainer>
    </>
  );
}

export default Table;
