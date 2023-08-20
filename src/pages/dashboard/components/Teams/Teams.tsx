import Divider from '@/components/Divider';
import TableCell from '@/components/TableCell';
import TableRow from '@/components/TableRow';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import ColleaguesIcon from '@/components/icons/ColleaguesIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import DotsIcon from '@/components/icons/DotsIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import { Team } from '@/types';
import {
  Box,
  CircularProgress,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

interface TeamsProps {
  teams: Team[];
}

const useStyles = makeStyles()((theme) => {
  return {
    teamsWrapper: {
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
    teamsTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    teamsTitleRightBlock: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    teamsTableCellName: {
      display: 'flex',
      gap: theme.spacing(0.5),
      alignItems: 'center',
    },
    teamsTableCellColleages: {
      display: 'flex',
      alignItems: 'center',
    },
    teamsTableCellStatus: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    teamsTableCellDocuments: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});

export default function Teams(props: TeamsProps) {
  const theme = useTheme();
  const { classes } = useStyles();
  const { teams } = props;
  const [expanded, setExpanded] = useState(false);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.teamsWrapper}>
      <Box className={classes.teamsTitle}>
        <Typography variant="h2" color={theme.palette.text.darkPurple}>
          Мої команди
        </Typography>
        <Box className={classes.teamsTitleRightBlock}>
          <Typography variant="h2">
            <strong>{teams.length}</strong>
          </Typography>
          {isSmallDevice && (
            <IconButton onClick={() => setExpanded((prev) => !prev)}>
              <ArrowDownIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Collapse in={!isSmallDevice || expanded} unmountOnExit>
        <Box>
          <Divider />
          <TableContainer>
            <Table>
              <TableBody>
                {teams &&
                  teams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell>
                        <Box className={classes.teamsTableCellName}>
                          <Typography variant="h3">{team.name}</Typography>
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box className={classes.teamsTableCellColleages}>
                          <IconButton>
                            <ColleaguesIcon />
                          </IconButton>
                          <Typography variant="subtitle1">
                            <strong>{team.nubmerOfMembers}</strong>
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box className={classes.teamsTableCellStatus}>
                          <CircularProgress
                            variant="determinate"
                            value={team.status}
                            color="primary"
                            size={24}
                            thickness={5}
                            sx={{ strokeLinecap: 'round' }}
                          />
                          <Typography variant="subtitle1">
                            <strong>{`${team.status}%`}</strong>
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box className={classes.teamsTableCellDocuments}>
                          <IconButton>
                            <DocumentIcon />
                          </IconButton>
                          <Typography variant="subtitle1">
                            <strong>{team.numberOfDocuments}</strong>
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <DotsIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
        </Box>
      </Collapse>
    </Box>
  );
}
