import { ReactElement } from 'react';

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
  data: unknown[];
}

function Table({ columnsName, data }: ITableProps): ReactElement {
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
          <TableBody>
            {data.map(dataItem => (
              <TableRow>
                {Object.entries(dataItem as never).map(([, value]) => (
                  <TableCell component="th" scope="row">
                    {(typeof value === 'string' ||
                      typeof value === 'number' ||
                      typeof value === 'bigint') &&
                      value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableComponent>
      </TableContainer>
    </>
  );
}

export default Table;
