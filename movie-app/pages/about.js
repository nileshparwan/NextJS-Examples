import next from 'next';
import React from 'react';

const About = () => {
    return (
        <div>
            about
            {React.createElement('p', null, 'Hello React')}
        </div>
    );
};

export default About;