import ActivitiesIcon from '@/components/icons/ActivitiesIcon';
import ColleaguesIcon from '@/components/icons/ColleaguesIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import NavigationIcon from '@/components/icons/NavigationIcon';
import TeamIcon from '@/components/icons/TeamIcon';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import FormDialog from '../FormDialog';

const useStyles = makeStyles()((theme) => {
  return {
    tabbarContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: theme.palette.primary.main,
      padding: theme.spacing(3),
      gap: theme.spacing(5),
      gridRow: '2/3',
      zIndex: 1,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: theme.spacing(1, 1, 0, 0),
        padding: theme.spacing(1.5, 1),
        gap: 0,
        position: 'sticky',
        bottom: 0,
      },
    },
  };
});

export default function Tabbar() {
  const theme = useTheme();
  const { classes } = useStyles();
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  const openFormDialogHandler = useCallback(
    () => setOpenFormDialog(true),
    [setOpenFormDialog],
  );

  const closeFormDialogHandler = useCallback(
    () => setOpenFormDialog(false),
    [setOpenFormDialog],
  );

  return (
    <>
      <Box className={classes.tabbarContainer}>
        <IconButton size={isSmallDevice ? 'large' : 'medium'}>
          <ColleaguesIcon color={theme.palette.common.darkPurple} />
        </IconButton>
        <IconButton size={isSmallDevice ? 'large' : 'medium'}>
          <TeamIcon color={theme.palette.common.darkPurple} />
        </IconButton>
        <IconButton size={isSmallDevice ? 'large' : 'medium'}>
          <ActivitiesIcon color={theme.palette.common.darkPurple} />
        </IconButton>
        <IconButton size={isSmallDevice ? 'large' : 'medium'}>
          <DocumentIcon color={theme.palette.common.darkPurple} />
        </IconButton>
        <IconButton
          onClick={openFormDialogHandler}
          size={isSmallDevice ? 'large' : 'medium'}
        >
          <NavigationIcon color={theme.palette.common.darkPurple} />
        </IconButton>
      </Box>
      <FormDialog
        open={openFormDialog}
        handleFormClose={closeFormDialogHandler}
      />
    </>
  );
}
