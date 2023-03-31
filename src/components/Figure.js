export default function Figure(figure) {
    return (
        <figure>
            <img src={figure.src} alt={"Figure " + figure.num} />
            <figcaption><b>Figure {figure.num}</b></figcaption>
        </figure>
    )
}