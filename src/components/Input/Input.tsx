import { TextField, useTheme } from '@mui/material';
import SearchIcon from '../icons/SearchIcon';
import { makeStyles } from 'tss-react/mui';

interface InputProps {
  fullWidth?: boolean;
}

const useStyles = makeStyles()(() => {
  return {
    Input: {
      justifyContent: 'center',
    },
  };
});

export default function Input(props: InputProps) {
  const theme = useTheme();
  const { fullWidth } = props;
  const { classes } = useStyles();

  return (
    <TextField
      className={classes.Input}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: <SearchIcon color={theme.palette.common.gray} />,
        sx: {
          borderRadius: '20px',
          fieldset: {
            border: 'none',
            background: '#76768012',
          },
        },
      }}
      maxRows={1}
      rows={1}
      size="small"
      type="text"
    />
  );
}
