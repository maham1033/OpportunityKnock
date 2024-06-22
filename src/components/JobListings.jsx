import React from 'react';
import { useState,useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({isHome=false}) => {
    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(true);
    // const JobListings= isHome?jobs.slice(0,3):jobs;
    useEffect(()=>{
      const fetchJobs=async()=>{
        const apiURL=isHome? 'https://jobs-server-api-ashy.vercel.app/? _limit=3':'https://jobs-server-api-ashy.vercel.app/?'

        try {
          
          const res=await fetch (apiURL);
          const data=await res.json();
          setJobs(data);
        } 
        catch (error) {
        console.log('Error',error);
        }
        finally{
          setLoading(false);
        }

          

      }
      fetchJobs();
    },[]);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-4xl font-bold text-customBlue mb-6 text-center">
         { isHome ? 'Recent Jobs':'Browse Jobs'}
        </h2>
       
          {loading?
          <Spinner loading={loading}/>:
           (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map ((job)=>(
             <JobListing key={job.id} job={job}/>

          ))}
          </div>
          )}
          
         
         
       
      </div>
    </section> 
    </>
  )
}

export default JobListings;
