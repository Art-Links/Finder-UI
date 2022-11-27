import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';




const RequstedAnswers = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const Item = await fetch(`http://localhost:3000/forms`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Item.json()
            // window.alert(json.messages)
            if (json?.success) {
                setItems(json?.data)
            }
        }
        getItems()
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>Requsted Items</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Requsted User</TableCell>
                        <TableCell align="right">Item</TableCell>
                        <TableCell align="right">Answer For Question 1</TableCell>
                        <TableCell align="right">Answer For Question 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.calories}</TableCell>
                            <TableCell align="right">{item.fat}</TableCell>
                            <TableCell align="right">{item.carbs}</TableCell>
                            <TableCell align="right">{item.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default RequstedAnswers;