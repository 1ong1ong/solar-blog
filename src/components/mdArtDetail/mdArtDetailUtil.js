export function getMarkdownTitleIds(htmlTitles) {

    const result = [];
    for (let i = 0; i < htmlTitles.length; i++) {
        let htmlId = htmlTitles[i].id;
        let htmlText = htmlTitles[i].innerText;
        result.push({
            htmlId: htmlId,
            htmlText: htmlText
        })
    }
    return result;
}