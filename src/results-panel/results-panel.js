import React from 'react';
import ResultsFilter from './results-filter/results-filter';
import './results-panel.scss';

class ResultsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filter: 'release date'};
        this.filters = [{id: "1", name: "release date"}, {id: "2", name: "rating"}]

        this.changeSortFilter = this.changeSortFilter.bind(this);
    }

    changeSortFilter(event) {
        event.preventDefault();
        let filter = event.currentTarget.innerText;

        this.setState({filter: filter});
        this.props.sortMovies(filter);
    }

    render() {
        let isEmptyList = this.props.movies.length !== 0;
        return (
            <div className="results-panel">
                <div>
                    {
                        isEmptyList ? <div className="results-panel__movies-count">
                            {this.props.movies.length} movies found</div> : null
                    }
                </div>
                <div>
                    {
                        isEmptyList ? <ResultsFilter changeSortFilter={this.changeSortFilter} currentFilter={this.state.filter}
                            filters={this.filters}></ResultsFilter> : null
                    }
                </div>
            </div>
        )
    }
}

export default ResultsPanel;


