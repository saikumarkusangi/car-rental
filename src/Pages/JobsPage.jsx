import React from 'react';
import JobListTile from '../components/JobListTile';
import '../styles/JobStyles.css';
const dummyJobs = [
  {
    id: 1,
    image:'http://reactjob.codebasket.xyz/assets/img/job/apple.png',
    title: 'Frontend Developer',
    company: 'ABC Company',
    location: 'New York, NY',
    datePosted: 'July 1, 2023',
  },
  {
    id: 2,
    image:'http://reactjob.codebasket.xyz/assets/img/job/google.png',
    title: 'Full Stack Developer',
    company: 'XYZ Corporation',
    location: 'San Francisco, CA',
    datePosted: 'June 25, 2023',
  },
  {
    id: 3,
    image:'http://reactjob.codebasket.xyz/assets/img/job/starbuck.png',
    title: 'UI/UX Designer',
    company: '123 Design Studio',
    location: 'London, UK',
    datePosted: 'June 30, 2023',
  },
  // Add more job objects here...
];

const JobList = () => {
  return (
    <div className='job-page'>
      <div class="filters">

    <select class="filter">
      <option value="">All Locations</option>
      <option value="New York">New York</option>
      <option value="San Francisco">San Francisco</option>

    </select>
    <select class="filter">
      <option value="">All Categories</option>
      <option value="Software Development">Software Development</option>
      <option value="Design">Design</option>

    </select>

    <select class="filter">
      <option value="">All Types</option>
      <option value="Software Development">Full Time</option>
      <option value="Design">PartTime</option>

    </select>
   
  </div>
      {dummyJobs.map((job) => (
        <JobListTile key={job.id} job={job} />
      ))}
    </div>
  );
};


export default JobList;
