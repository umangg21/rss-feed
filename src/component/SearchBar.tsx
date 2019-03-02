
import React from 'react';
import { ButtonBase, Button, TextField } from '@material-ui/core';
import { Styles } from '../style/Styles';
import SearchIcon from '@material-ui/icons/Search';

interface ISearchBarProps {
    onAddSearchUrl: Function
}

interface ISearchBarStates {
    searchValue: string;
}


export class SearchBar extends React.Component<ISearchBarProps, ISearchBarStates> {

    constructor(props: any) {
        super(props)
        this.state = { searchValue: "" }

    }

    onAddSearchUrl = () => {
        if (this.state.searchValue) {
            this.props.onAddSearchUrl(this.state.searchValue)
            this.setState({ searchValue: "" })
        }
    }

    handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            this.onAddSearchUrl()
        }
    }

    handleChange = (event: any) => {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <div className="layout-gt-sm-row layout-column layout-align-space-between-center" style={Styles.searchBar}>
                    <TextField
                        id="outlined-search"
                        label="Input URL"
                        value={this.state.searchValue}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        margin="normal"
                        variant="outlined"
                        style={Styles.searchBarInput}
                    />

                    <Button style={Styles.searchBarButton}
                        onClick={this.onAddSearchUrl}
                    >
                        <SearchIcon />
                    </Button>

                </div>

            </React.Fragment>
        )
    }
}

export default SearchBar;