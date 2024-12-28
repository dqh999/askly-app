type SelectComponentProps = {
    title: string,
    input: any,
    handleInputChange(e: any): void,
    options: any[]
};
const SelectComponent = ({
    title,
    input,
    handleInputChange,
    options
}: SelectComponentProps) => {
    return (
        <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                {title}
            </label>
            <select
                id="topic"
                value={input}
                onChange={(e) => { handleInputChange(e) }}
                className="w-full p-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            >
                {options.map((option,index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default SelectComponent;