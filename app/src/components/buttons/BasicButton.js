import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton(props) {
  return (
      <Button color={props.color} endIcon={props.icon} variant="contained" sx={{letterSpacing: 5, borderRadius:"0", fontWeight: "400"}}> {props.name}</Button>

  );
}
