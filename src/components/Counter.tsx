import * as React from 'react';

export type CounterProps = {
    initialCount: number
};

export function Counter(props: CounterProps) {
    const [count, setCount] = React.useState(props.initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(props.initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
        </>
    );
}
