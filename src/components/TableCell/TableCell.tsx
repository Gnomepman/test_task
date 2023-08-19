import {
  TableCell,
  TableCellProps as TableCellBaseProps,
  useTheme,
} from '@mui/material';

interface TableCellProps {
  children?: React.ReactNode;
  align?: TableCellBaseProps['align'];
}

export default function Index(props: TableCellProps) {
  const theme = useTheme();
  const { children, align } = props;

  return (
    <TableCell
      align={align}
      sx={{
        borderColor: theme.palette.primary.light,
      }}
    >
      {children}
    </TableCell>
  );
}
