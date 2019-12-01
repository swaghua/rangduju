import React from 'react';
import Home from './home'

class SiteMap extends React.Component {
    render() {
        return (
            <urlset xmlns="https://rangduju.com/sitemap.xml">
                <url>
                    <loc>https://rangduju.com/</loc>
                </url>
                <url>
                    <loc>https://rangduju.com/demo</loc>
                </url>
                <url>
                    <loc>https://rangduju.com/faq</loc>
                </url>
                <url>
                    <loc>https://rangduju.com/cooperation</loc>
                </url>
                <url>
                    <loc>https://rangduju.com/about</loc>
                </url>
                <url>
                    <loc>https://rangduju.com/prediction</loc>
                </url>
            </urlset>
        )
    }
}

export default SiteMap;