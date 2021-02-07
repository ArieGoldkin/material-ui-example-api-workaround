import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

const TableContent = (props) => {
  return (
    <Table size="small" aria-label="purchases" >
      <TableHead>
        <TableRow>
          <TableCell>low</TableCell>
          <TableCell>open</TableCell>
          <TableCell align="right">close</TableCell>
          <TableCell align="right">timestamp</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">{props.row.low}</TableCell>
          <TableCell align="left">{props.row.open}</TableCell>
          <TableCell align="right">{props.row.close}</TableCell>
          <TableCell align="right">{props.row.timestamp}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableContent;
