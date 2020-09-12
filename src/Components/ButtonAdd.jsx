import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
   
    position: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
      background: "#36bbbf",

    },
  }));

const ButtonAdd = () => {
    const classes = useStyles();
    return (
        <Fragment>
             <Tooltip title="Add" aria-label="add" >
        <Fab color="primary" className={classes.position}>
          <AddIcon />
        </Fab>
      </Tooltip>
            
        </Fragment>
    )
}

export default ButtonAdd
