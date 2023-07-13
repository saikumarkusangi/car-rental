import React from 'react';
import '../styles/JobStyles.css'
const JobListTile = ({ job }) => {
  const { image,title, company, location, datePosted } = job;

  return (
    <div class="job-list-tile">
    <img src={image} alt="Company Logo" class="logo"/>
    <div class="details">
      <h3 class="title">{title}</h3>
      <p class="company">{company}</p>
      <p class="location">{location}</p>
      <p class="date">{datePosted}</p>
    </div>
    <div className="cta"><a href='#'>Apply</a></div>
  </div>
  );
};

export default JobListTile;