import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCallback, useState } from 'react';

interface FormDialogProps {
  open: boolean;
  handleFormClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  comment: string;
}

export default function FormDialog(props: FormDialogProps) {
  const { open, handleFormClose } = props;
  const [formData, setFormData] = useState<FormData | undefined>({
    name: '',
    email: '',
    comment: '',
  });

  const handeFormSubmit = useCallback(() => {
    console.log(formData);
    handleFormClose();
  }, [formData]);

  return (
    <Dialog open={open} onClose={handleFormClose}>
      <DialogTitle>Send feedback</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We would like to know what do you think!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={formData?.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(
              (prev) => ({ ...prev, name: e.target.value }) as FormData,
            );
          }}
        />
        <TextField
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={formData?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(
              (prev) => ({ ...prev, email: e.target.value }) as FormData,
            );
          }}
        />
        <TextField
          margin="dense"
          id="name"
          label="Your comment"
          type="text"
          fullWidth
          variant="standard"
          value={formData?.comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData(
              (prev) => ({ ...prev, comment: e.target.value }) as FormData,
            );
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose}>Cancel</Button>
        <Button onClick={handeFormSubmit}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}
