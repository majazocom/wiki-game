import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import wiki from 'wikipedia';

export default function GamePage() {
    const [articleData, setArticleData] = useState();

    const location = useLocation();
    const incomingData = location.state;
    console.log(incomingData);

    let anchorArray = document.getElementsByTagName('a');
    console.log(anchorArray);


    useEffect(() =>{
        if (anchorArray > 1) {
            anchorArray.forEach(element => {
                console.log(element);
            });
        }
    }, [anchorArray])

    useEffect(() => {
        (async () => {
            try {
                const page = await wiki.page(incomingData.startWord);
                console.log(page);
                //Response of type @Page object
                let summary = await page.html();
                //console.log(summary);
                setArticleData(summary);
                //Response of type @wikiSummary - contains the intro and the main image
            } catch (error) {
                console.log(error);
                //=> Typeof wikiError
            }
        })();
    }, []);

    return (
        <main>
            <header className="articleHeader">
                <h1 className="articleHeaderTitle">{incomingData.startWord.toUpperCase()}</h1>
            </header>
            {articleData ? <section
                dangerouslySetInnerHTML={{ __html: articleData }}
            /> : null}
        </main>
    )
}