import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { ItemApi } from '../types/api';

type Props = {
  itemList: ItemApi[],
  downloadImage: any
}

const Items = (props: Props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="right">No.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Counts</TableCell>
                <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.itemList.map((item: ItemApi) => (
              <TableRow
                key={item.pictureId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{item.pictureId}</TableCell>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell align="right">{item.count}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      props.downloadImage(item.pictureId);
                    }}>
                      Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Items;