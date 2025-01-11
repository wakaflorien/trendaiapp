"use client";
import * as React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { TableProps } from "@/@types/global";

const TableComponent: React.FC<TableProps> = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Submission Date</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" component="th" scope="row">{row.title}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.submissionDate}</TableCell>
                            <TableCell align="left">{row.actions}</TableCell>

                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="left">
                            <div className="flex gap-4 cursor-pointer">
                                <header className='font-semibold text-xl'>Total Posts</header>
                                <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">Approved: 10</Typography>
                                <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">Pending: 10</Typography>
                                <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">Rejected: 10</Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default TableComponent;