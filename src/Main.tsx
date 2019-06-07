import * as React from 'react';
import {Hello} from './components/Hello';
import {Counter} from './components/Counter';

export const Main = function() {
    return <div>
        <Hello compiler="TypeScript" framework="React" bundler="Parcel" />
        <Counter initialCount={100}/>
    </div>;
};