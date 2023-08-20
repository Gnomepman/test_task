import Divider from '@/components/Divider';
import ExpandMoreButton from '@/components/ExpandMoreButton';
import { Message } from '@/types';
import { formatDate } from '@/utils';
import {
  Avatar,
  Box,
  Collapse,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

interface UpdatesProps {
  messages: Message[];
}

const useStyles = makeStyles()((theme) => {
  return {
    updatesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box',
      borderRadius: theme.spacing(1.2),
      border: '1px solid',
      borderColor: `${theme.palette.common.purple}30`,
      background: theme.palette.primary.light,
      padding: theme.spacing(3, 2),
      [theme.breakpoints.down('md')]: {
        height: 'auto',
        padding: theme.spacing(1.5),
      },
    },
    updatesTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    updatesListElementCompose: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
      gap: theme.spacing(1),
    },
    updatesListElement: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      columnGap: theme.spacing(1),
    },
    updatesListElementCell: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
    },
  };
});

export default function Updates(props: UpdatesProps) {
  const theme = useTheme();
  const { classes } = useStyles();
  const { messages } = props;
  const [expanded, setExpanded] = useState(false);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.updatesWrapper}>
      <Box className={classes.updatesTitle}>
        <Typography variant="h2" color={theme.palette.text.darkPurple}>
          Останні оновлення:
        </Typography>
        {isSmallDevice && (
          <ExpandMoreButton
            onClick={() => setExpanded((prev) => !prev)}
            expand={expanded}
          />
        )}
      </Box>
      <Collapse in={!isSmallDevice || expanded}>
        <Box className={classes.updatesListElementCompose}>
          <Divider />
          {messages &&
            messages.map((message) => (
              <Box key={message.id} className={classes.updatesListElement}>
                <Avatar src={message.author.avatar} />
                <Box className={classes.updatesListElementCell}>
                  <Typography variant="h3">
                    <strong>{message.author.name}</strong>
                  </Typography>
                  <Typography variant="h3">{message.text}</Typography>
                </Box>
                <Typography variant="h4">{formatDate(message.date)}</Typography>
              </Box>
            ))}
        </Box>
      </Collapse>
    </Box>
  );
}
