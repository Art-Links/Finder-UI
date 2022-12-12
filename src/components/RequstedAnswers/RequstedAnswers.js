import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/authContext';





const RequstedAnswers = () => {
    const [items, setItems] = useState([])
    const { token } = useContext(AuthContext)
    useEffect(() => {
        const getItems = async () => {
            const Item = await fetch(`http://localhost:3000/forms`, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,

                }
            })
            const json = await Item.json()
            // window.alert(json.messages)
            if (json?.success) {
                setItems(json?.data)
                console.log(json.data)
            }
        }
        getItems()
    }, [])
    return (
        <TableContainer id='alo' style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justify_content: 'start',
        }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption style={{ fontWeight: 'bolder' }}>Requsted Items</caption>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Requsted User</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Item</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Answer For Question 1</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Answer For Question 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell component="th" scope="row">
                                {item?.User?.userName}
                            </TableCell>
                            <TableCell align="right">{item?.Item?.name}</TableCell>
                            {item?.answers && JSON.parse(item.answers)?.map(ans => (
                                <>
                                        <TableCell align="right">{ans?.question}</TableCell>
                                        <TableCell align="row">{ans?.answer}</TableCell>
                                </>
                            ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default RequstedAnswers;