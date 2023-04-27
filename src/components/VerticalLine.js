import "./VerticalLine.css"

export default function Line() {
    return (<div style={{ display: "flex", minHeight: "100%" }}>
        <div className="vertical_line_box__item"></div>
        <div className="vertical_line_box__item line"> </div>
    </div>)
}