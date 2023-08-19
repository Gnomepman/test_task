import Button from '@/components/Button';
import TableCell from '@/components/TableCell';
import TableRow from '@/components/TableRow';
import DeleteIcon from '@/components/icons/DeleteIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import { Task, TaskStatus } from '@/types';
import { formatDate } from '@/utils';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  useTheme,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface PlansProps {
  tasks: Task[];
}

const mapPlanStatus = {
  [TaskStatus.InProgress]: { variant: 'warning', message: 'В процесі' },
  [TaskStatus.Completed]: { variant: 'success', message: 'Виконано' },
  [TaskStatus.Missed]: { variant: 'error', message: 'Не вчасно' },
};

const useStyles = makeStyles()((theme) => {
  return {
    plansWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: theme.spacing(1.2),
      border: '1px solid',
      borderColor: `${theme.palette.common.purple}30`,
      background: theme.palette.primary.light,
      padding: theme.spacing(3, 2),
      gap: theme.spacing(2),
    },
    plansTitle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    plansTableHeader: {
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: theme.palette.primary.light,
    },
    plansTableCellName: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(0.5),
    },
    plansTableCellStatus: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(0.5),
    },
    plansTableRowCompose: {
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: theme.spacing(3),
    },
  };
});

export default function Plans(props: PlansProps) {
  const theme = useTheme();
  const { tasks } = props;
  const { classes } = useStyles();

  return (
    <Box className={classes.plansWrapper}>
      <Box className={classes.plansTitle}>
        <Typography variant="h2" color={theme.palette.text.darkPurple}>
          Плани робіт
        </Typography>
        <Typography variant="h2">
          <strong>{tasks.length}</strong>
        </Typography>
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead className={classes.plansTableHeader}>
              <TableRow>
                <TableCell />
                <TableCell align="center">
                  <Typography variant="h4">
                    <strong>Початок</strong>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">
                    <strong>Кінець</strong>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h4">
                    <strong>Статус</strong>
                  </Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <Box className={classes.plansTableCellName}>
                      <Typography variant="h3">{task.name}</Typography>
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">
                      <strong>{formatDate(task.startDate)}</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">
                      <strong>{formatDate(task.endDate)}</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box className={classes.plansTableCellStatus}>
                      <Button variant={mapPlanStatus[task.status].variant}>
                        <Typography variant="h4">
                          {mapPlanStatus[task.status].message}
                        </Typography>
                      </Button>
                      {task.missedDeadlineInDays && (
                        <Typography variant="h4">
                          {`На ${task.missedDeadlineInDays} днів `}
                        </Typography>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
