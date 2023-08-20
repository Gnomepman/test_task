import { Box } from '@mui/material';
import Tabbar from './components/Tabbar/Tabbar';
import Container from './containers/Dashboard';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: 'flex',
      height: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'grid',
        gridTemplateRows: '1fr auto',
      },
    },
  };
});

export default function Index() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Tabbar />
      <Container />
    </Box>
  );
}
