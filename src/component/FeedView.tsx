import React from 'react';
import { ButtonBase, Button, Card } from '@material-ui/core';
import { FeedItem } from '../contract/Feed';
import { Styles } from '../style/Styles';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


interface IFeedViewProps {
    feedItem: FeedItem;
}

export class FeedView extends React.PureComponent<IFeedViewProps> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Card style={Styles.feedCard}>
                    <div className="layout-column">
                        <div className="layout-row layout-align-space-between-center" style={Styles.feedCardHeader}>
                            <h4 >{this.props.feedItem.title}</h4>
                            <h4>{new Date(this.props.feedItem.pubDate).toLocaleDateString()}</h4>
                        </div>
                        <div style={Styles.feedCardContent}>
                            <div>{ReactHtmlParser(this.props.feedItem.description)}</div>
                        </div>

                    </div>
                </Card>

            </React.Fragment>
        )
    }
}

export default FeedView;