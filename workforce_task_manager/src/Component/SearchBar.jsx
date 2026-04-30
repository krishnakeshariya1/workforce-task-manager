export const SearchBar = ({search, setSearch}) => {
    return (
        <>
            <input
                value={search}
                type="text"
                placeholder="Search your tasks..."
                className="flex-1 bg-[var(--color-page-bg)] border border-[var(--color-border)] px-4 py-2 rounded-md outline-none text-[var(--color-secondary-text)]"
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    )
}