import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {InputLabel, Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import {Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    table:{
        mindWidth: 650
    }
  }));

function FormLine(formLabel, formMain){
    return(
        
        <TableRow>
            <TableCell 
                align="right"
                style={{ width: 400}}>
                {formLabel}
            </TableCell>
            <TableCell 
                align="left"
                style={{ width: 400}}>
                {formMain}
            </TableCell>

        </TableRow>

        
        
    );
}


const AdvertiserForm = () => {
    const classes = useStyles();

    const elements = [
        'Advertisement client',
        'Advertisement category',
        'Title',
        'Priority',
        'Position',
        'Advertise Type',
        'Image',
        'Advertise Link',
        'Status',
        'Start date',
        'End date'
        
    ]
    const items = []
    
    for(const [i,j] of elements.entries()){
        items.push(
            <TableRow>
                {FormLine(j,
                <Select 
                    labelId="advertise_client_id" 
                    name="advertise_client_id"
                    style={{width:100}}>
                </Select>
                )}
            </TableRow>

        )
    };

    return (

        <div style={{width:"100%", display:"inline-block"}}>
            <TableContainer
                style={{width:"100%"}}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {items}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    )
}

export default AdvertiserForm;