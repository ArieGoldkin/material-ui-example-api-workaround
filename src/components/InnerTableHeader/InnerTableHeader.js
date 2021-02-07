import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const InnerTableHeader = (props) => {
  const { open, setOpen } = props;

  const classes = useRowStyles();

  return (
    <TableRow className={classes.root} hover>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {props.row.currency}
      </TableCell>
      <TableCell align="right">{props.row.rate}</TableCell>
      <TableCell align="right">{props.row.bid}</TableCell>
      <TableCell align="right">{props.row.ask}</TableCell>
      <TableCell align="right">{props.row.high}</TableCell>
    </TableRow>
  );
};

export default InnerTableHeader;
