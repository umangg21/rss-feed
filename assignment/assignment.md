# feed-it
# ADCAT React & Redux RSS Feed assignment

## Overview

The goal is to create a simple RSS feed display.

The left side allows selecting, adding and removing RSS feeds.

The right side displays the currently selected RSS feed.

## Wireframes
![Alt text](https://s3.amazonaws.com/500tech-shared/angular+home+assignment+500tech+wireframes.png)

## Definitions

### Main screen
1. Header - showing the URL of the feed
2. Content - showing the feed items
<br>
The feed items themselves should be written as a component that displays the title, date, and body.

### Sidebar
1. String input - RSS URL + submit button
2. URL history list - list of URLs the user viewed

* When submitting an RSS URL, its URL should be inserted to the top of the history list in an “active” (selected) state, and the main section should display its feed.
* When clicking on an item (URL) from that list, it should get an “active” (selected) state, and the main section should display its feed.
* When hitting browser back button, it should navigate back to the previous URL that was active
* Each history item should also contain an “x” button, to remove that item from the list.
* The list items should be persistent, should stay on page refresh.

## RSS feed API

Sample feeds:
* https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/
* https://api.rss2json.com/v1/api.json?rss_url=https://aws.amazon.com/blogs/big-data/feed/




