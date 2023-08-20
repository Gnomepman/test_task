import { IconButton } from '@mui/material';
import ArrowDownIcon from '../icons/ArrowDownIcon';

interface ExpandMoreProps {
  expand: boolean;
  onClick: () => void;
}

export default function Index(props: ExpandMoreProps) {
  const { expand, onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)' }}
    >
      <ArrowDownIcon />
    </IconButton>
  );
}
