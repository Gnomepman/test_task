import Input from '@/components/Input/Input';
import LogoIcon from '@/components/icons/LogoIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import AvatarSrc from '@/assets/Avatar.png';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

const useStyles = makeStyles()((theme) => {
  return {
    AppbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid',
      borderColor: theme.palette.primary.light,
      gap: theme.spacing(2.5),
      padding: theme.spacing(2, 3),
      position: 'sticky',
      top: 0,
      zIndex: theme.zIndex.appBar,
      background: theme.palette.background.paper,
    },
    AppbarContentLeft: {
      display: 'flex',
      flex: '1',
      gap: theme.spacing(3),
    },
    AppbarContentRight: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(3.5),
    },
    AppbarContentRightUser: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
    },
  };
});

export default function Appbar() {
  const theme = useTheme();
  const { classes } = useStyles();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.AppbarContainer}>
      <Box className={classes.AppbarContentLeft}>
        {!isSmallDevice && <LogoIcon color={theme.palette.common.purple} />}
        <Input fullWidth={isSmallDevice} />
      </Box>
      <Box className={classes.AppbarContentRight}>
        <IconButton>
          <Badge badgeContent={1} color="error">
            <NotificationIcon />
          </Badge>
        </IconButton>
        <Box className={classes.AppbarContentRightUser}>
          <Avatar src={AvatarSrc} />
          {!isSmallDevice && (
            <Typography variant="subtitle1">
              Герасімчук Марія Олександрівна
            </Typography>
          )}
          <IconButton>
            <ArrowDownIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
