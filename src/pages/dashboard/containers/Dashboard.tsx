import { Box, Typography } from '@mui/material';
import Appbar from '../components/Appbar';
import { makeStyles } from 'tss-react/mui';
import mock from '@/mock';
import Teams from '../components/Teams';
import Plans from '../components/Plans';
import Updates from '../components/Updates/Updates';
import Calendar from '../components/Calendar';

const useStyles = makeStyles()((theme) => {
  return {
    dashboardContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      overflow: 'auto',
      [theme.breakpoints.down('md')]: {
        position: 'relative',
      },
    },
    dashboardContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(3),
      padding: theme.spacing(1, 4),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1, 2),
        gridRow: '2/3',
      },
    },
    dashboardElementsCompose: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gridTemplateColumns: '1fr 1fr',
      columnGap: theme.spacing(2.5),
      rowGap: theme.spacing(3),
      height: '100%',
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  };
});

export default function Dashboard() {
  const { classes } = useStyles();

  return (
    <Box className={classes.dashboardContainer}>
      <Appbar />
      <Box className={classes.dashboardContent}>
        <Typography variant="h1">Контрольний центр</Typography>
        <Box className={classes.dashboardElementsCompose}>
          <Teams teams={mock.teams} />
          <Calendar />
          <Plans tasks={mock.tasks} />
          <Updates messages={mock.messages} />
        </Box>
      </Box>
    </Box>
  );
}
