import React from 'react';
import Layout from '../../layout';
import SearchContainer from './search';
import ResultsPanel from './results-panel';

const Main = ({ match: {params: {query}}, history }) =>
    <Layout query={query} headerContent={<SearchContainer history={history}/>} panel={<ResultsPanel />} />

export default Main;
