import { MdOutlineArrowDropDown } from "react-icons/md";

const ChoiceButton = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn shadow-none m-1 bg-site-secondary rounded-xl w-36 text-white">
                 {selectedOption} <MdOutlineArrowDropDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-site-secondary rounded-box z-1 w-52 p-2 border-2 shadow-lg">
                {options.map((option) => (
                    <li className='hover:bg-white hover:text-site-secondary rounded-lg' key={option.value}>
                        <button onClick={() => onSelect(option.value)}>{option.label}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChoiceButton