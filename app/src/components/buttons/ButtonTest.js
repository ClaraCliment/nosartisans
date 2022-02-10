import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonTest(props) {
  return (
      <Button color="secondary" variant="contained" sx={{letterSpacing: 5, borderRadius:"0", fontWeight: "400"}}> {props.name}</Button>

  );
}
