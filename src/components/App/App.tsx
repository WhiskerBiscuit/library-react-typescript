import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

const App: React.FC = () => (
    <div className="App">
        <header className="App-header">
            <img
                alt="logo"
                className="App-logo"
                src={ logo } />
            <p>
                <span>Edit</span>
                <code>
                    src/App.tsx
                </code>
                <span>and save to reload.</span>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank">
                Learn React
            </a>
        </header>
    </div>
);

App.propTypes = {};
App.defaultProps = {};

export default App;

// interface NewAppProps {
//     blah: string;
// }
// export class NewApp extends React.Component {
//     static propTypes = {
//         blah: PropTypes.string,
//     }
//     static defaultProps = {
//         blah: 'xxx',
//     };
//     xxx = '';

//     constructor(props: NewAppProps) {
//         super(props);

//         this.xxx = props.blah;
//     }

//     render(): React.ReactElement {
//         return (
//             <div>{this.xxx}</div>
//         );
//     }
// }
