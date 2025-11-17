import { useCompany } from "../context/CompanyContext";

const Filter = () => {
  const {
    search,
    setSearch,
    location,
    setLocation,
    industry,
    setIndustry,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  } = useCompany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-[#1c1c22]  p-4 rounded-xl shadow-lg border border-[#00ff99]">
     

     {/* search bar */}
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-[#00ff99] p-2 rounded focus:outline-none text-[#00ff99] focus:ring-2 focus:ring-[#00ff99] bg-[#1c1c22]"
      />

      {/* Location Filtering logic  */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border-2 border-[#00ff99] p-2 rounded focus:outline-none focus:ring-2 text-white focus:ring-[#00ff99] bg-[#1c1c22] custom-select pr-8"
      >
        <option value="All">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
        <option value="Noida">Noida</option>
        
        
      </select>

      {/* Industry Filter */}


      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="border-2 border-[#00ff99] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00ff99] bg-[#1c1c22] custom-select pr-8"
      >
        <option value="All">All Industries</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="E-Commerce">E-Commerce</option>
      </select>

      {/* Sort By */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border-2 border-[#00ff99] p-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#00ff99] bg-[#1c1c22] custom-select pr-8"
      >
        <option value="name">Sort by Name</option>
        <option value="location">Sort by Location</option>
        <option value="industry">Sort by Industry</option>
      </select>

      {/* Sort Order */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border-2 border-[#00ff99] text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00ff99] bg-[#1c1c22] custom-select pr-8"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Filter;
