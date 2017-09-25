import React from 'react';
import Layout from '../../layout';
import Search from './search';
import ResultsPanel from './results-panel';

const Main = ({match}) => {
    console.log(match.params.query);
    const search = <Search></Search>;
    const resultsPanel = <ResultsPanel></ResultsPanel>;

    return (
        <div>
            <Layout headerContent={search} panel={resultsPanel}></Layout>
        </div>
    )
}

export default Main;
