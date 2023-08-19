import { Button, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const variants = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  label: 'label',
};

interface ButtonProps {
  variant: keyof typeof variants | string;
  children: React.ReactNode;
  onClick?: () => void;
}

const useStyles = makeStyles()((theme) => {
  return {
    button: {
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(0.625),
      color: theme.palette.common.white,
      textTransform: 'none',
    },
    [variants.success]: {
      background: theme.palette.success.main,
      ':hover': {
        background: theme.palette.success.light,
      },
    },
    [variants.warning]: {
      background: theme.palette.warning.main,
      color: theme.palette.common.black,
      ':hover': {
        background: theme.palette.warning.light,
      },
    },
    [variants.error]: {
      background: theme.palette.error.main,
      ':hover': {
        background: theme.palette.error.light,
      },
    },
    [variants.label]: {
      background: theme.palette.background.paper,
    },
  };
});

export default function Index(props: ButtonProps) {
  const { classes, cx } = useStyles();
  const { variant, children, onClick } = props;
  return (
    <Button onClick={onClick} className={cx(classes.button, classes[variant])}>
      <Typography variant="h4">{children}</Typography>
    </Button>
  );
}

Index.defaultProps = {
  onClick: null,
};
