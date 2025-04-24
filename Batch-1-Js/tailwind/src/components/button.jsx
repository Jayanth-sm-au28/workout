import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={5} direction="row">
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled>Disabled</Button>
      <Button variant="contained" disableElevation>
  Disable elevation
</Button> */}

<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>
    </Stack>
  );
}
