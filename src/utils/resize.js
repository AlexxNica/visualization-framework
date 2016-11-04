/*
    Computes the size of the Visualization CardText component according to the gridItem
    Arguments:
    * gridItem: the gridItem
    Returns:
        An object with computed { width, height } for passing to visualizations as props.
*/
export const resizeVisualization = (gridItem) => {
    if (!gridItem || gridItem.childNodes.length == 0 || gridItem.childNodes[0].childNodes.length == 0)
        return {
            width: 0,
            height: 0
        };

    let card          = gridItem.childNodes[0],
        innerCard     = card.childNodes[0].childNodes,
        muiPadding    = 16, // The padding applied on all sides from Material UI.
        width         = card.clientWidth - muiPadding * 2,
        height        = card.clientHeight - muiPadding * 2;

    // Handle the case that the title bar is present.
    if (innerCard.length > 1) {
        height -= innerCard[0].clientHeight;
    }

    return {
        width: width,
        height: height
    };
}
