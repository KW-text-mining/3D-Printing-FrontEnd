// @mui
import { TextField, FormHelperText, Grid, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useDateRangePicker } from '../../../../components/date-range-picker';

export default function FirstComponent() {

  const pickerInput = useDateRangePicker(new Date(), new Date());
  const start = JSON.stringify(pickerInput.startDate).slice(1,11);
  const end = JSON.stringify(pickerInput.endDate).slice(1,11);
  
  return (
    <div>
      {pickerInput.isError && (
        <FormHelperText error sx={{ px: 10 }}>
          End date must be later than start date
        </FormHelperText>

      )}
      <div>
        <br />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={15} md={3}>
          <DatePicker
            inputFormat='yyyy/MM/dd'
            label="Start date"
            value={pickerInput.startDate}
            onChange={pickerInput.onChangeStartDate}
            renderInput={(params) => <TextField {...params}/>}
          />
        </Grid>
        <Grid item xs={15} md={3}>

          <DatePicker
            inputFormat='yyyy/MM/dd'
            label="End date"
            value={pickerInput.endDate}
            onChange={pickerInput.onChangeEndDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button disabled={pickerInput.isError} >Apply</Button>
          <Button onClick={pickerInput.onReset}>Reset</Button>
        </Grid>
      </Grid>
    </div>
  );
}