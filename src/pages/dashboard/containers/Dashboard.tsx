import { Box } from '@mui/material';
import Tabbar from '../components/Tabbar';
import Appbar from '../components/Appbar';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    dashboardContainer: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      height: '100%',
    },
    dashBoardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
  };
});

export default function Dashboard() {
  const { classes } = useStyles();

  return (
    <Box className={classes.dashboardContainer}>
      <Tabbar />
      <Box className={classes.dashBoardWrapper}>
        <Appbar />
      </Box>
    </Box>
  );
}
