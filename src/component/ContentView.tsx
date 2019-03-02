import React from 'react';
import { ButtonBase, Button, CircularProgress, Card } from '@material-ui/core';
import { RssService } from '../service/RssService';
import { Feed, contentState } from '../contract/Feed';
import FeedView from './FeedView';
import { Styles } from '../style/Styles';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

interface IContentViewProps {
    rssUrl: string
}

interface IContentViewStates {
    result: Feed;
    contentView: contentState;
}


export class ContentView extends React.Component<IContentViewProps, IContentViewStates> {

    constructor(props: any) {
        super(props)
        this.state = { result: {}, contentView: contentState.inProgress }
    }

    updateFeeds = (feedURL: string) => {
        this.setState({ result: {}, contentView: contentState.inProgress })
        RssService.getFeed(feedURL)
            .then((response) => {
                return response.json();
            })
            .then((myJson: any) => {
                this.updateResponse(myJson)
            })
            .catch((error: any) => {
                this.setState({ result: {}, contentView: contentState.error })
            });
    }

    updateResponse = (response: any) => {
        if (response.status === "ok") {
            this.setState({ result: response, contentView: contentState.result })
        } else {
            this.setState({ result: response, contentView: contentState.error })
        }
    }

    componentDidMount = () => {
        this.updateFeeds(this.props.rssUrl)
    }

    componentWillReceiveProps = (nextProps: IContentViewProps) => {
        if (nextProps.rssUrl != this.props.rssUrl) {
            if (nextProps.rssUrl == "") {
                this.setState({ result: {}, contentView: contentState.selection })
            } else {
                this.updateFeeds(nextProps.rssUrl)
            }
        }
    }

    getFeedList = () => {
        return this.state.result.items!.map((feedItem) => (
            <FeedView feedItem={feedItem}></FeedView>
        ))
    }

    render() {
        let content;

        switch (this.state.contentView) {

            case contentState.selection:
                content = (
                    <div className="flex-50 layout-row layout-align-center-center">
                        <h1 style={Styles.selectionUrl}>Enter a RSS URL in Search Bar</h1>
                    </div>
                )

                break;

            case contentState.inProgress:
                content = (
                    <div className="flex-100 layout-row layout-align-center-center">
                        <CircularProgress style={Styles.isBusy} />
                    </div>
                )
                break;

            case contentState.result:
                let feedList = this.getFeedList()
                content = (
                    <div className="layout-column">
                        <header className="layout-row layout-align-center-center">
                            <h1 style={Styles.urlHeader}>{this.state.result.feed!.url}</h1>
                        </header>
                        <div>
                            {feedList}
                        </div>
                    </div>
                )
                break;

            default:
                content = (
                    <div className="layout-row layout-align-center-center">
                        <Card style={Styles.errorMessageCard}>
                            <div className="layout-row">
                                <ErrorIcon style={Styles.errorMessageIcon} />
                                <p id="vehicleSelectionErrorMessageText" style={Styles.errorMessage}>{`Something went wrong.`}</p>
                            </div>
                        </Card>
                    </div>
                )
                break;
        }

        return (
            <React.Fragment>
                {content}
            </React.Fragment >
        )
    }
}

export default ContentView;