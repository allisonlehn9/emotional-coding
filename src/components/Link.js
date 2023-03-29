export default function Link(link) {
    return (
        <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
        </a>
    )
}