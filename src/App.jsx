import CompanyList from "./components/CompanyList";
import Filter from "./components/filter";
import Pagination from "./components/Pagination";


const App = () => {
  return (

  
       <div className=" h-screen w-full bg-[#1c1c22] p-6">
      <h1 className="text-3xl font-bold text-center font-primary text-[#00ff99] mb-6">
        Company Finder
      </h1>

      <div className="container mx-auto">
        <Filter />
        <CompanyList />
        <Pagination />
      </div>
    </div>
 
   
  );
};

export default App;
