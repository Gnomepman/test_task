import { Box, Typography } from '@mui/material';
import Tabbar from '../components/Tabbar';
import Appbar from '../components/Appbar';
import { makeStyles } from 'tss-react/mui';
import mock from '@/mock';
import Teams from '../components/Teams';
import Plans from '../components/Plans';
import Updates from '../components/Updates/Updates';

const useStyles = makeStyles()((theme) => {
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
    dashboardContent: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: theme.spacing(3),
      padding: theme.spacing(1, 4),
    },
    dashboardElementsCompose: {
      display: 'grid',
      gridTemplateRows: 'minmax(1fr,100%) minmax(1fr,100%)',
      gridTemplateColumns: '1fr 1fr',
      columnGap: theme.spacing(2.5),
      rowGap: theme.spacing(3),
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
        <Box className={classes.dashboardContent}>
          <Typography variant="h1">Контрольний центр</Typography>
          <Box className={classes.dashboardElementsCompose}>
            <Teams teams={mock.teams} />
            <Teams teams={mock.teams} />
            <Plans tasks={mock.tasks} />
            <Updates messages={mock.messages} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
