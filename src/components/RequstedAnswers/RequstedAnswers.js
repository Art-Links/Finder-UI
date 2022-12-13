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
        <TableContainer component={Paper} align="center">
            <Table style={{ width: '90%'}} aria-label="caption table">
                <caption style={{ fontWeight: 'bolder'}}>Requsted Items</caption>
                <TableHead>
                    <TableRow style={{borderTop: '1px solid gray'}}>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid lightgray',borderLeft: '1px solid lightgray' }}>Requsted User</TableCell>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid gray' }} align="center">Item</TableCell>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid lightgray',borderBottom: '1px solid gray' }} align="center">Question 1</TableCell>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid gray', borderBottom: '1px solid gray' }} align="center">Answer 1</TableCell>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid lightgray' ,borderBottom: '1px solid gray' }} align="center">Question 2</TableCell>
                        <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid gray', borderBottom: '1px solid gray' }} align="center">Answer 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell style={{borderRight: '1px solid lightgray',borderLeft: '1px solid lightgray'}} component="th" scope="row">
                                {item?.User?.userName}
                            </TableCell>
                            <TableCell align="center" style={{borderRight: '1px solid gray'}}>{item?.Item?.name}</TableCell>
                            {item?.answers && JSON.parse(item.answers)?.map(ans => (
                                <>
                                    <TableCell align="center" style={{borderRight: '1px solid lightgray', borderBottom: '1px solid gray'}}>{ans?.question}</TableCell>
                                    <TableCell className='m' style={{
                                        color: 'red',
                                        // position: 'relative',
                                        // left: '50px',
                                        borderRight: '1px solid gray',
                                        borderBottom: '1px solid gray'
                                    }} align="center">{ans?.answer}</TableCell>
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