// @mui
import { Box, Button, Stack, Link } from '@mui/material';
import DateRangePicker, { useDateRangePicker } from '../../../../components/date-range-picker';
// utils
import { fDate } from '../../../../utils/formatTime';
//
import { Block } from '../../../_examples/Block';

// ----------------------------------------------------------------------

export default function AppDatePicker() {
  const pickerInput = useDateRangePicker(new Date(), new Date());

  const pickerCalendar = useDateRangePicker(new Date(), null);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <Block title="Select Date Range">
          <Button variant="contained" onClick={pickerInput.onOpen}>
            Click me!
          </Button>

          <Stack sx={{ typography: 'body2', mt: 3 }}>
            <div>
              <strong>Start:</strong> {fDate(pickerInput.startDate)}
            </div>
            <div>
              <strong>End:</strong> {fDate(pickerInput.endDate)}
            </div>
          </Stack>

          <DateRangePicker
            open={pickerInput.open}
            startDate={pickerInput.startDate}
            endDate={pickerInput.endDate}
            onChangeStartDate={pickerInput.onChangeStartDate}
            onChangeEndDate={pickerInput.onChangeEndDate}
            onClose={pickerInput.onClose}
            isError={pickerInput.isError}
          />
          
        </Block>

      </Box>
    </>
  );
}
