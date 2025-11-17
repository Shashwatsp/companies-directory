import { createContext, useContext, useState, useEffect } from "react";
import { companies as companyData } from "../data/data";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Sorting state
  const [sortBy, setSortBy] = useState("name"); // name, location, industry
  const [sortOrder, setSortOrder] = useState("asc"); // asc, desc

  const itemsPerPage = 9;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentCompanies = filtered.slice(indexOfFirst, indexOfLast);

  // Reset page on filter/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, industry, sortBy, sortOrder]);

  // Load data on mount
  useEffect(() => {
    setCompanies(companyData);
    setFiltered(companyData);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = companyData;

    if (search.trim() !== "") {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location !== "All") {
      result = result.filter((c) => c.location === location);
    }

    if (industry !== "All") {
      result = result.filter((c) => c.industry === industry);
    }

    // Sorting
    result = [...result].sort((a, b) => {
      let valA = a[sortBy].toLowerCase();
      let valB = b[sortBy].toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(result);
  }, [search, location, industry, sortBy, sortOrder]);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filtered,
        search,
        setSearch,
        location,
        setLocation,
        industry,
        setIndustry,
        currentCompanies,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
