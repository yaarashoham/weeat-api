import React, {Component} from "react";
import './SearchRow.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import { BootstrapInput } from '../FilterRow/FilterRow.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },

}));



class SearchRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        console.log("these are my props: ", props);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render(){
        const filterText = this.props.filterText;
        return(
            <div id={"search-row"}>
                <Fab color="secondary" aria-label="add" className={useStyles.button}>
                    <AddIcon />
                </Fab>
                <div className="title-container">
                    <h1>WeEat</h1>
                    <h3>Eat what you love!</h3>
                </div>
                <FormControl
                    className="search-bar" /**{classes.margin}*/

                    onFilterTextChange={this.handleFilterTextChange}
                >
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        placeholder="Find a restaurant"
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    {/*<InputLabel*/}
                    {/*    htmlFor="customized-textbox"*/}
                    {/*    placeholder="Find a restaurant">*/}
                    {/*    Find a restaurant*/}
                    {/*</InputLabel>*/}
                    <BootstrapInput id="customized-textbox"/>
                </FormControl>
            </div>
        );
    }
}

export default SearchRow;
