import React, {Component} from "react";
import './FilterRow.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

export const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

// class FilterRow extends Component {
export default function FilterRow() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };
    // render(){
        return(
            <div id="filter-row">
                <div id="select-cuisine">
                    <FormControl className=/**"cuisine-filter-form"*/{classes.margin}>
                        {/*<InputLabel htmlFor="cuisine-customized-textbox">Cuisine</InputLabel>*/}
                        <label>Cuisine</label>
                        <Select
                            labelId="customized-select-label"
                            id="customized-select"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div id="select-rating">
                    <FormControl className=/**"rating-filter-form"*/{classes.margin}>
                        {/*<InputLabel htmlFor="rating-customized-textbox">Rating</InputLabel>*/}
                        <label>Rating</label>
                        <Select
                            labelId="customized-select-label"
                            id="customized-select"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div id="select-speed">
                <FormControl className=/**"speed-filter-form"*/{classes.margin}>
                    {/*<InputLabel htmlFor="speed-customized-textbox">Speed</InputLabel>*/}
                    <label>Speed</label>
                    <Select
                        labelId="customized-select-label"
                        id="customized-select"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </div>
        );
    // }
}

//export default FilterRow;