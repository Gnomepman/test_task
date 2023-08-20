import Divider from '@/components/Divider';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import Button from '@/components/Button';
import { useState } from 'react';
import ExpandMoreButton from '@/components/ExpandMoreButton';

const useStyles = makeStyles()((theme) => {
  return {
    calendarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: theme.spacing(1.2),
      border: '1px solid',
      borderColor: `${theme.palette.common.purple}30`,
      background: theme.palette.primary.light,
      padding: theme.spacing(3, 2),
      gap: theme.spacing(1),
      [theme.breakpoints.down('md')]: {
        height: 'auto',
        padding: theme.spacing(1.5),
      },
    },
    calendarTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    calendarCompose: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
    },
    calendarHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    calendarHeaderLeftBlock: {
      display: 'flex',
      alignItems: 'center',
    },
    calendarHeaderRightBlock: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
    },
    calendarTableCellTimeStamp: {
      paddingTop: theme.spacing(1.5),
      paddingButtom: theme.spacing(1.5),
      paddingLeft: 0,
      borderBottom: 'none',
      borderRight: '1px solid',
      borderColor: theme.palette.primary.light,
    },
    calendarTableCellTimeline: {
      width: '100%',
      borderBottom: 'none',
      paddingLeft: 0,
      paddingRight: 0,
    },
  };
});

export default function Calendar() {
  const theme = useTheme();
  const { classes } = useStyles();
  const [expanded, setExpanded] = useState(false);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  const timeStamps = ['8am', '9am', '10am', '11am', '12pm'];

  return (
    <Box className={classes.calendarWrapper}>
      <Box className={classes.calendarTitle}>
        <Typography variant="h2" color={theme.palette.text.darkPurple}>
          Календар
        </Typography>
        {isSmallDevice && (
          <ExpandMoreButton
            onClick={() => setExpanded((prev) => !prev)}
            expand={expanded}
          />
        )}
      </Box>
      <Collapse in={!isSmallDevice || expanded} unmountOnExit>
        <Box className={classes.calendarCompose}>
          <Box className={classes.calendarHeader}>
            <Box className={classes.calendarHeaderLeftBlock}>
              <Typography variant="h3">Вт, 18 жов</Typography>
              <IconButton>
                <ArrowDownIcon />
              </IconButton>
            </Box>
            <Box className={classes.calendarHeaderRightBlock}>
              <Button variant="label">Сьогодні</Button>
              <IconButton>
                <ArrowLeftIcon />
              </IconButton>
              <IconButton>
                <ArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Typography variant="h4">GMT+03</Typography>
          <TableContainer>
            <Table>
              {timeStamps.map((timeStamp, index) => (
                <TableRow key={index}>
                  <TableCell
                    size="small"
                    className={classes.calendarTableCellTimeStamp}
                  >
                    <Typography variant="h4">{timeStamp}</Typography>
                  </TableCell>
                  <TableCell className={classes.calendarTableCellTimeline}>
                    <Divider />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Collapse>
    </Box>
  );
}
