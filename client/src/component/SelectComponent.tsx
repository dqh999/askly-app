type SelectComponentProps = {
    title: string,
    input: string,
    handleInputChange(e: React.ChangeEvent<HTMLSelectElement>): void,
    options: string[]
};
const SelectComponent = ({
    title,
    input,
    handleInputChange,
    options
}: SelectComponentProps) => {
    return (
        <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                {title}
            </label>
            <select
                id="topic"
                value={input}
                onChange={(e) => { handleInputChange(e) }}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SelectComponent;