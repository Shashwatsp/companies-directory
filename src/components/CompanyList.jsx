import { useCompany } from "../context/CompanyContext.jsx";

const CompanyList = () => {
  const { currentCompanies } = useCompany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-6 mt-6">
      {currentCompanies.length === 0 ? (
        <p className="text-center col-span-full text-4xl text-red-400 text-lg font-semibold">
          <span className="inline-block mr-2 ">🚫</span>No companies found
        </p>
      ) : (
        currentCompanies.map((company) => (
          <div
            key={company.id} 
            className="bg-[#1c1c22] p-5  word-break w-full overflow-hidden font-primary rounded-2xl text-white shadow-lg border border-[#00ff99] 
            hover:scale-105 hover:shadow-xl transition-all duration-200 flex flex-col items-start"
          >
            <h2 className="text-2xl font-extrabold text-white font-primary mb-2 flex items-center">
              <span className="inline-block mr-2 text-[#00ff99]">🏢</span>
              {company.name}
            </h2>
            <p className="text-sm font-semibold font-primary text-[#00ff99] mb-1 flex items-center">
              <span className="inline-block mr-1">💼</span>
              {company.industry}
            </p>
            <p className="text-sm font-primary font-semibold text-[#00ff99] flex items-center">
              <span className="inline-block mr-1">📍</span>
              {company.location}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default CompanyList;
