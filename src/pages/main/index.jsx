import React from 'react';
import Layout from '../../layout';
import SearchContainer from './search';
import ResultsPanelContainer from './results-panel';

const Main = ({match}) =>
    <Layout query={match.params.query} headerContent={<SearchContainer />} panel={<ResultsPanelContainer />} />

export default Main;
