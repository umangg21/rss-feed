import React from 'react';
import ContentView from './ContentView';
import SearchBar from './SearchBar';
import HistoryList from './HistoryList';

interface IHomeProps {
}

interface IHomeStates {
    historyURL: string[]
    selectedUrlIndex: number
}

function getHomeStyle() {
    return {
        minHeight: "-webkit-fill-available",
        backgroundColor: "#FEFBF5"
    }
}

export class Home extends React.Component<IHomeProps, IHomeStates> {

    constructor(props: any) {
        super(props)

        this.state = {
            selectedUrlIndex: 0,
            historyURL: [
                "http://sukhmanisakhi.com/feed/",
                "https://aws.amazon.com/blogs/big-data/feed/"
            ]
        }

    }

    deleteUrl = (index: number) => {
        let tempHistoryUrl = [...this.state.historyURL]
        tempHistoryUrl.splice(index, 1)
        var newIndex = this.state.selectedUrlIndex
        if (index == this.state.selectedUrlIndex || index == tempHistoryUrl.length) {
            newIndex = 0
        }
        if (tempHistoryUrl.length == 0) {
            newIndex = -1
        }
        this.setState({ historyURL: tempHistoryUrl, selectedUrlIndex: newIndex })
    }

    onAddSearchUrl = (url: string) => {
        let tempHistoryUrl = [...this.state.historyURL]
        tempHistoryUrl.unshift(url)
        this.setState({ selectedUrlIndex: 0, historyURL: tempHistoryUrl })
    }

    onCardSelect = (index: number) => {
        this.setState({ selectedUrlIndex: index })
    }

    render() {
        let selectedUrl = this.state.selectedUrlIndex >= 0 ? this.state.historyURL[this.state.selectedUrlIndex] : ""

        return (
            <React.Fragment>
                <div id="HomeComponet" className="layout-row" style={getHomeStyle()}>
                    <div className="flex-25 layout-column">
                        <SearchBar
                            onAddSearchUrl={this.onAddSearchUrl}
                        />
                        <HistoryList
                            historyURL={this.state.historyURL}
                            deleteUrl={this.deleteUrl}
                            selectedUrlIndex={this.state.selectedUrlIndex}
                            onCardSelect={this.onCardSelect}
                        />
                    </div>
                    <div className="flex-75 layout-column">
                        <ContentView
                            rssUrl={selectedUrl}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;