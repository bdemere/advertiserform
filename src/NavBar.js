import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import tagmifyLogo from './tagmify.png'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <img 
                    src={tagmifyLogo} 
                    alt="Tagmify"
                    style={{padding:15}}
                    width="50"
                    height="50"/>
                <Typography variant="title" color="inherit">
                Tagmify Advertiser Form
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;