import './Toggle.css'
function Toggle(props) {
    return (
        <div className="inline-flex ">
            <div>
                <label htmlFor="toggle-switch">
                    <input
                        type="checkbox"
                        value={props.chosedValue}
                        onChange={props.onmakeChange}
                        checked={props.chekedValue}
                        id="toggle-switch"
                        className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-white bg-opacity-5  border-2 border-white checked:bg-gray-600 transition duration-200 relative"
                    />
                </label>
            </div>
            <div className="mt-2">
                <span className="ml-2">{props.title}</span>
            </div>
        </div>
    )
}

export default Toggle
