import Button from '@/components/Button';
import { mapButtonVariants } from '@/components/Button/Button';
import ExpandMoreButton from '@/components/ExpandMoreButton';
import TableCell from '@/components/TableCell';
import TableRow from '@/components/TableRow';
import DeleteIcon from '@/components/icons/DeleteIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import { Task } from '@/types';
import { formatDate } from '@/utils';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

interface PlansProps {
  tasks: Task[];
}

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
      [theme.breakpoints.down('md')]: {
        height: 'auto',
        padding: theme.spacing(1.5),
      },
    },
    plansTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    plansTitleRightBlock: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
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
  const { classes } = useStyles();
  const { tasks } = props;
  const [expanded, setExpanded] = useState(false);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.plansWrapper}>
      <Box className={classes.plansTitle}>
        <Typography variant="h2" color={theme.palette.text.darkPurple}>
          Плани робіт
        </Typography>
        <Box className={classes.plansTitleRightBlock}>
          <Typography variant="h2">
            <strong>{tasks.length}</strong>
          </Typography>
          {isSmallDevice && (
            <ExpandMoreButton
              onClick={() => setExpanded((prev) => !prev)}
              expand={expanded}
            />
          )}
        </Box>
      </Box>
      <Collapse in={!isSmallDevice || expanded} unmountOnExit>
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
                        <Button
                          variant={mapButtonVariants[task.status].variant}
                        >
                          <Typography variant="h4">
                            {mapButtonVariants[task.status].message}
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
      </Collapse>
    </Box>
  );
}
