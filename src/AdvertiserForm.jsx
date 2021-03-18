import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core'
import {makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const AdvertiserForm = () => {
    const classes = useStyles();

    return (

        <div>
            
            <FormControl className={classes.formControl}>
                <label for="advertise_client_id" 
                class="col-xl-3 col-lg-3 col-form-label required" aria-required="true">Advertisement Client</label>
                <div class="col-lg-3">
                    <Select 
                        labelId="advertise_client_id" 
                        name="advertise_client_id">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </FormControl>
        </div>
    )

}

export default AdvertiserForm;