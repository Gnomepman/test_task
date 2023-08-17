import ActivitiesIcon from '@/components/icons/ActivitiesIcon';
import ColleaguesIcon from '@/components/icons/ColleaguesIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import NavigationIcon from '@/components/icons/NavigationIcon';
import TeamIcon from '@/components/icons/TeamIcon';
import { Box, IconButton, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    tabbarContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: theme.palette.primary.main,
      padding: theme.spacing(3),
      gap: theme.spacing(5),
    },
  };
});

export default function Tabbar() {
  const theme = useTheme();
  const { classes } = useStyles();

  return (
    <Box className={classes.tabbarContainer}>
      <IconButton>
        <ColleaguesIcon color={theme.palette.common.darkPurple} />
      </IconButton>
      <IconButton>
        <TeamIcon color={theme.palette.common.darkPurple} />
      </IconButton>
      <IconButton>
        <ActivitiesIcon color={theme.palette.common.darkPurple} />
      </IconButton>
      <IconButton>
        <DocumentIcon color={theme.palette.common.darkPurple} />
      </IconButton>
      <IconButton
      //   onClick={open form}
      >
        <NavigationIcon color={theme.palette.common.darkPurple} />
      </IconButton>
    </Box>
  );
}
