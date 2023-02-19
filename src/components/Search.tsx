import SearchIcon from 'src/icons/SearchIcon'

const Search = () => {
    return (
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Søg
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <SearchIcon className='h-3 stroke-white' />
                    </div>
                    <input
                        id="search"
                        className="block w-full bg-transparent rounded-xl border border-white focus:border-white py-1 leading-5 text-white placeholder-white focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-white sm:text-sm"
                        placeholder="Søg..."
                        type="text"
                        name="search"
                    />
                </div>
            </div>
        </div>
    )
}

export default Search