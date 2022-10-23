import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const UserTable = ({ User }: any) => {
  return useMemo(
    () => (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <h3>Name</h3>
              </TableCell>
              <TableCell align="right">
                <h3>Surname</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Email</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Divide */}
          <TableBody>
            {User.map(({ id, first_name, last_name, email }: any) => {
              return (
                <TableRow key={id}>
                  <TableCell align="right">{first_name}</TableCell>
                  <TableCell align="right">{last_name}</TableCell>
                  <TableCell align="center">{email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    ),
    [User]
  );
};
