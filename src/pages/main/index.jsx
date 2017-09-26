import React from 'react';
import Layout from '../../layout';
import Search from './search';
import ResultsPanel from './results-panel';

const Main = ({match}) => {

    return (
        <div>
            <Layout headerContent={<Search/>} panel={<ResultsPanel/>}></Layout>
        </div>
    )
}

export default Main;
