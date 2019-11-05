import React, {Component} from 'react';
import './App.css';
import SearchRow from "./SearchRow/SearchRow";
import FilterRow from "./FilterRow/FilterRow";
import ResultsRow from "./ResultsRow/ResultsRow";
import {withStyles} from "@material-ui/core";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            restaurants: [],
            filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:3001/restaurants")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        restaurants: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

  render() {
    return (
        <div className="App">
          <div className="search-row">
              <SearchRow
                  filterText={this.state.filterText}
                  onFilterTextChange={this.handleFilterTextChange}
              />
          </div>
          <div className="filter-row">
              <FilterRow />
          </div>
          <ResultsRow
              restaurants={this.state.restaurants}
              filterText={this.state.filterText}
              />
        </div>
    );
  }
}

const BootstrapInput = withStyles(theme => ({
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
}));




export default App;