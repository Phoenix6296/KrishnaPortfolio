import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
    ReactGA.initialize('G-44YNXXL5LC');
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
};

export default Analytics;