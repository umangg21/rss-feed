const rss2jsonUrl = "https://api.rss2json.com/v1/api.json?"

export class RssService {

    static getFeed(rssUrl: string) {

        // let finalurl = rss2jsonUrl + "rss_url=" + rssUrl 
        let finalurl = rss2jsonUrl + "rss_url=" + rssUrl + "&api_key=" + "7dryu95kzj8f0qaljxsemamvacjtlrxezobzaaj2"

        return fetch(finalurl)
    }
}