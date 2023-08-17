import { Box } from '@mui/material';
import Appbar from '../components/Tabbar';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    dashboardContainer: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      height: '100%',
    },
  };
});

export default function Dashboard() {
  const { classes } = useStyles();

  return (
    <Box className={classes.dashboardContainer}>
      <Appbar />
      <Box>I am content</Box>
    </Box>
  );
}
