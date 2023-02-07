import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
};

export default Analytics;