import { Divider, useTheme } from '@mui/material';

export default function Index() {
  const theme = useTheme();
  return (
    <Divider
      sx={{ background: theme.palette.primary.light, borderColor: '#00000000' }}
    />
  );
}
