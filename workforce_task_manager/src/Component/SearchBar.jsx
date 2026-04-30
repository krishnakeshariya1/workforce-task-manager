export const SearchBar = ({search, setSearch}) => {
    return (
        <>
            <input
                value={search}
                type="text"
                placeholder="Search your tasks..."
                className="flex-1 bg-[#1c1c1c] border border-gray-700 px-4 py-2 rounded-md outline-none"
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    )
}