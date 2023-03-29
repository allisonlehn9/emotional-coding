import { usePopper } from "react-popper"
import { useRef, useState } from "react"

export default function Footnote(footnote) {

    const footnoteRef = useRef()
    const popperRef = useRef()

    const [isHovered, setHovered] = useState(false);

    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    // measure distance from mouse and entity
    const onMouseMove = (e) => {
        const { x, y } = e.nativeEvent;
        const { left, top } = footnoteRef.current?.getBoundingClientRect();
        setMouseOffset({ x: (x - left) / 4, y: (y - top) / 4 });
    }

    const {styles, attributes} = usePopper(footnoteRef?.current, popperRef?.current, {
        placement: 'right-start',
        position: 'fixed',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [10 + mouseOffset.y, mouseOffset.x + 10],
                },
            },
        ],
    })

    const PADDING_RIGHT  = 128
    const remainingX = window.innerWidth - (footnoteRef?.current?.getBoundingClientRect().left + PADDING_RIGHT)




    return (
        <>
            <span 
                ref = {footnoteRef}
                className="footnote"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={e => isHovered && onMouseMove(e)}
            >
                [{footnote.num}]
            </span>

            {isHovered && (
                <div 
                    ref={popperRef}
                    className = {"footnote--text"}
                    style={{ width: Math.max(386, remainingX),
                             opacity: isHovered ? 1 : 0,
                             ...styles.popper }}
                    {...attributes.popper}
                >
                    {footnote.text}
                        
                </div>
            )
            }
        </>
    )
}