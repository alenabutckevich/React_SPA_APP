import React from 'react';
import Layout from '../../layout';
import Search from './search';
import ResultsPanel from './results-panel';

const Main = () => (
    <div>
        <Layout headerContent={<Search></Search>} panel={<ResultsPanel></ResultsPanel>}></Layout>
    </div>
)

export default Main;
