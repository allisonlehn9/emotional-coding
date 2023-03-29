

export default function Footnote(footnote) {
    return (
        <div className="footnote">[{footnote.num}]
            <span className="footnote--text">{footnote.text}</span>
        </div>
    )
}