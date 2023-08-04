import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../../components/Button/Button";


const SearchJob = () => {
    const [jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        console.log(searchText);
        // fetch(`https://my-avenger-server.vercel.app/job-name/${searchText}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setJobs(data);
        //     });
    };
    return (
        <div className="d-flex mt-5 justify-content-center">
<h2><Fade cascade>Search Job On Best Job Portal in India</Fade></h2>
            
            <div className="mb-5 ms-5 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="border-4 border-black py-1 px-4 me-2"
                    placeholder="Write Job Name Here"
                />
                
                <Button onClick={handleSearch}>Search</Button>
                
            </div>
            
        </div>
    );
};

export default SearchJob;