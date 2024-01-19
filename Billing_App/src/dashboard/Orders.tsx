import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useEffect, useState } from 'react';
import axios from 'axios';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {

  const [data, setData] = useState<any[]>([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [])


  return (
    <React.Fragment>
      <Title>Recent Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Age</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell >{item.name}</TableCell>
              <TableCell >{item.email}</TableCell>
              <TableCell >{item.isActive ? 'Active' : 'Inactive'}</TableCell>
              <TableCell >{item.age}</TableCell>
              <TableCell align="right">{`$${item.balance / 100}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more customers
      </Link>
    </React.Fragment>
  );
}
