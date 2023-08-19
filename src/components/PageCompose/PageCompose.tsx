import { Box } from '@mui/material';

interface PageComposeProps {
  children: React.ReactNode;
}

export default function PageCompose(props: PageComposeProps) {
  const { children } = props;

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        maxWidth: '100%',
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      {children}
    </Box>
  );
}
