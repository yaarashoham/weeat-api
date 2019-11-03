import React, {Component} from "react";
import './SearchRow.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { BootstrapInput } from './FilterRow.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        //accentColor: transperant,
    },
    input: {
        display: 'none',
    },

}));



class SearchRow extends Component {
    render(){
        return(
            <div id={"search-row"}>
                <Fab color="secondary" aria-label="add" className={useStyles.fab}>
                    <AddIcon />
                </Fab>
                <div className="title-container">
                    <h1>WeEat</h1>
                    <h3>Eat what you love!</h3>
                </div>
                <FormControl className="search-bar" /**{classes.margin}*/>
                    <InputLabel htmlFor="customized-textbox" placeholder="Find a restaurant">Find a restaurant </InputLabel>
                    <BootstrapInput id="customized-textbox" />
                </FormControl>
            </div>
        );
    }
}

export default SearchRow;
