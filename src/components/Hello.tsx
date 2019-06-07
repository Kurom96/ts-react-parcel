import * as React from 'react';

export type HelloProps = {
    compiler: string,
    framework: string,
    bundler: string
};

export const Hello = (props: HelloProps) => (
    <div>
        <h1>
            TestPage
        </h1>
        <div>
            compiler: {props.compiler}<br />
            framework: {props.framework}<br />
            bundler: {props.bundler}
        </div>
    </div>
);