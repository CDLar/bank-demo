import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { format, sub } from 'date-fns'

//Column settings
const columns = [
  { id: 'Country', label: 'Country', minWidth: 170 },
  {
    id: 'oneDay',
    label: '1D',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'oneWeek',
    label: '1W',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'oneMonth',
    label: '1M',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'threeMonth',
    label: '3M',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'sixMonth',
    label: '6M',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'oneYear',
    label: '1Y',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

//MUI styles
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function CurrencyTable() {
  const classes = useStyles();
  const [data, setData] = useState()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const currDate = new Date()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.exchangeratesapi.io/latest?base=USD',
      );
      const resultOneDay = await axios(
        `https://api.exchangeratesapi.io/${format(sub(currDate, {days:2}), 'yyyy-MM-dd')}?base=USD`,
      );
      const resultOneWeek = await axios(
        `https://api.exchangeratesapi.io/${format(sub(currDate, {days:2}), 'yyyy-MM-dd')}?base=USD`,
      );
      const resultOneMonth = await axios(
        `https://api.exchangeratesapi.io/${format(sub(currDate, {days:2}), 'yyyy-MM-dd')}?base=USD`,
      );
      const resultThreeMonth = await axios(
        `https://api.exchangeratesapi.io/${format(sub(currDate, {days:2}), 'yyyy-MM-dd')}?base=USD`,
      );
      const resultSixMonth = await axios(
        `https://api.exchangeratesapi.io/${format(sub(currDate, {days:2}), 'yyyy-MM-dd')}?base=USD`,
      );
      
      setData(result.data.rates);
    };
    fetchData();
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && Object.entries(data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
                <TableCell align="center">{value.toFixed(5)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data && (<TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />)}
    </Paper>
  );
}