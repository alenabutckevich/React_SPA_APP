import React from 'react';
import Layout from '../../layout';
import Search from './search';
import ResultsPanel from './results-panel';

const Main = () => 
    <Layout headerContent={<Search />} panel={<ResultsPanel />}/>

export default Main;
