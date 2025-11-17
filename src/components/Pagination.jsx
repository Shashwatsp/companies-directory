import { useCompany } from "../context/CompanyContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, filtered, itemsPerPage } = useCompany();

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (totalPages === 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex w-full items-center justify-center gap-3 mt-6">

      {/* Previous Button */}


      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-[#00ff99] font-primary rounded-md disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

  


      <span className="font-semibold text-white font-primary">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}


      <button
        onClick={handleNext}
        className="px-4 py-2 bg-[#00ff99] font-primary rounded-md disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
