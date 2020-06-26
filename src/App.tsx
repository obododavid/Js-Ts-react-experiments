import React from "react"
import Table from "./Table/index"
import Doughnut from "./DoughnutChart/index"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Table />
            <Doughnut />
        </div>
    )
}

export default App
