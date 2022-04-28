import React, { useEffect, useState } from 'react'

export default function Article(props) {
    const articleData = props.articleData;
    const [anchorArr, setAnchorArr] = useState([]);
    let anchorArray = [];

    useEffect(() => {
        anchorArray = document.getElementsByTagName('a');
        console.log(anchorArray);
        setAnchorArr(Array.from(anchorArray));
    }, [articleData])

    useEffect(() => {
        console.log(anchorArr);
        if (anchorArr.length > 0) {
            let anchors = [...anchorArr];
            anchors = modAnchors(anchors);
            setAnchorArr(anchors);
        }
    }, [anchorArr])

    const modAnchors = async (anchors) => {
        let moddedAnchors = anchors.forEach((anchor) => anchor.onClick = console.log('hej'))
        return moddedAnchors;
    }

    return (
        <main>
            {articleData ? <section
                dangerouslySetInnerHTML={{ __html: articleData }}
            /> : null}
        </main>
    )
}
