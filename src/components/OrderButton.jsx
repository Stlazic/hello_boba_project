
export default function OrderButton({children, onSelect, isSelected}) {

    return (
        <button className={isSelected ? "active" : ""} onClick={onSelect} >{children}</button>
    )
}