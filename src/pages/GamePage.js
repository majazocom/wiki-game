import { useEffect, useState } from "react";
import wiki from 'wikipedia';
import './GamePage.module.css';

export default function GamePage() {
    const [data, setData] = useState();
    const searchString = 'tree';

    useEffect(() => {
        (async () => {
            try {
                const page = await wiki.page('harry potter');
                console.log(page);
                //Response of type @Page object
                let summary = await page.html();
                summary = summary.toString().replaceAll(/<p>/gi, '<p class="pleft">');
                console.log(summary);
                setData(summary);
                //Response of type @wikiSummary - contains the intro and the main image
            } catch (error) {
                console.log(error);
                //=> Typeof wikiError
            }
        })();
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    return (
        <main>
            <header className="articleHeader">
                <h1 className="articleHeaderTitle">{searchString.toUpperCase()}</h1>
            </header>
            {data ? <section
                dangerouslySetInnerHTML={{ __html: data }}
            /> : null}
        </main>
    )
}