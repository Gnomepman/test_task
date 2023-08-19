import { TableRow, useTheme } from '@mui/material';

interface TableRowProps {
  children?: React.ReactNode;
}

export default function Index(props: TableRowProps) {
  const theme = useTheme();
  const { children } = props;

  return (
    <TableRow
      sx={{
        verticalAlign: 'top',
        '&:last-child td, &:last-child th': { border: 0 },
        td: {
          padding: theme.spacing(1, 0),
        },
      }}
    >
      {children}
    </TableRow>
  );
}
