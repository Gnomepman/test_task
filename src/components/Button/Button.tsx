import { Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const variants = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  label: 'label',
};

interface ButtonProps {
  variant: keyof typeof variants;
  children: React.ReactNode;
  onClick?: () => void;
}

const useStyles = makeStyles()((theme) => {
  return {
    button: {
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(1),
      color: theme.palette.common.white,
    },
    [variants.success]: {
      background: theme.palette.success.main,
      ':hover': {
        background: theme.palette.success.light,
      },
    },
    [variants.warning]: {
      background: theme.palette.warning.main,
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
      {children}
    </Button>
  );
}

Index.defaultProps = {
  onClick: null,
};
