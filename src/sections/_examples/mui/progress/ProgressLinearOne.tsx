// @mui
import { Paper, LinearProgress } from '@mui/material';
//
import { Label } from '../../Block';

// ----------------------------------------------------------------------
// progressbar color
const COLORS = ['primary'] as const;

const style = {
  p: 2,
  minHeight: 160,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { m: 1 },
} as const;

// ----------------------------------------------------------------------

type LinearProps = {
  progress: number;
  buffer: number;
};
// Loading Progressbar One
export default function ProgressLinearOne({ progress, buffer }: LinearProps) {
  return (

      <div>
        <Label title="" />
        <Paper variant="outlined" sx={style}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </Paper>
      </div>
  );
}
