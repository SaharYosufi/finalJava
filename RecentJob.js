document.addEventListener("DOMContentLoaded", function() {
    const jobPostings = [
      {id:"1",company: "Google",title: "Software Engineer",salary: "$134 - $148 /yr",applyLink: "profile.html",icon: "fab fa-google",apply: 'Apply',JobType: 'Full-Time',Location:'Remote',Industry:'Technology',Skills:'JavaScript'},
      {id:"2",company: "Microsoft",title: "Senior Developer",salary: "$150 - $170 /yr",applyLink: "profile2.html",icon: "fab fa-facebook",apply: 'Apply',JobType: 'Contract',Location:'Remote',Industry:'Technology',Skills:'JavaScript'},
      {id:"3",company: "Google",title: "Lead Software Engineer", salary: "$140 - $160 /yr",applyLink: "profile2.html",icon: "fab fa-git-alt",apply: 'Apply',JobType: 'Full-Time',Location:'Remote',Industry:'Technology',Skills:'JavaScript'},
      {id:"4",company: "Amazon",title: "Full Stack Developer",salary: "$130 - $150 /yr",applyLink: "profile2.html",icon: "fab fa-facebook",apply: 'Apply',JobType: 'Part-Time',Location:'New-York',Industry:'Finance',Skills:'Python'},
      {id:"5",company: "IBM",title: "Cloud Solutions Architect",salary: "$160 - $180 /yr",applyLink: "profile2.html",icon: "fab fa-youtube",apply: 'Apply',JobType: 'Part-Time',Location:'New-York',Industry:'Finance',Skills:'Python'},
      {id:"6",company: "Facebook",title: "Data Scientist",salary: "$150 - $170 /yr",applyLink: "profile2.html",icon: "fab fa-google",apply: 'Apply',JobType: 'Part-Time',Location:'New-York',Industry:'Finance',Skills:'Python'},
      {id:"7",company: "Netflix",title: "DevOps Engineer",salary: "$140 - $160 /yr",applyLink: "profile2.html",icon: "fab fa-facebook",apply: 'Apply',JobType: 'Part-Time',Location:'San-Francisco', Industry:'Healthcare',Skills:'SQL'},
      {id:"8",company: "Apple",title: "Mobile Application Developer", salary: "$130 - $150 /yr",applyLink: "profile2.html",icon: "fab fa-facebook", apply: 'Apply',JobType: 'Internship',Location:'San-Francisco', Industry:'Healthcare',Skills:'SQL'},
      {id:"9",company: "Salesforce",title: "Software Development Manager",salary: "$160 - $180 /yr",applyLink: "profile2.html",icon: "fab fa-facebook",apply: 'Apply',JobType: 'Internship',Location:'London',Industry:'Education',Skills:'Project-Management'},
      {id:"10",company: "Adobe",title: "UI/UX Designer",salary: "$120 - $140 /yr",applyLink: "profile2.html",icon: "fab fa-facebook",apply: 'Apply',JobType: 'Contract',Location:'London',Industry:'Education',Skills:'Project-Management'},
    ];

    // creat jobcards function

    function createJobCard(job) {
      return `
        <div class="job-details">
          <div class="icon-img">
            <i class="${job.icon}"></i>
          </div>
          <div class="text">
            <h2>${job.title}</h2>
            <span>${job.company}</span>
          </div>
        </div>
        <div class="job-salary">
          <h4>${job.salary}</h4>
          <button class="btn0">
            <a href="${job.applyLink}" class="btn0-feature">${job.apply}</a>
          </button>
        </div>
      `;
    }

    const jobListContainer = document.getElementById('joblistcontainer');

    if (jobListContainer !== null) {
      jobPostings.forEach((job) => {
        const jobCard = document.createElement('div');
        jobCard.className = 'recent-job-card';
        jobCard.innerHTML = createJobCard(job);
        jobListContainer.appendChild(jobCard);
      });
    }

    // search input and button

     const button = document.getElementById("button-addon2");
     const searchInput = document.getElementById("search-input");
     
    button.addEventListener("click", function () {

      jobListContainer.innerHTML = '';

      const searchTerm = searchInput.value.trim().toLowerCase();
      jobPostings.forEach((job) => {

        
          if (job.company.toLowerCase().includes(searchTerm) || job.title.toLowerCase().includes(searchTerm) || job.Location.toLowerCase().includes(searchTerm)) {

            const jobCard = document.createElement('div');
            jobCard.className = 'recent-job-card';
            jobCard.innerHTML = createJobCard(job);
            jobListContainer.appendChild(jobCard);
          }

      });
    });

    // fiter button

    const linkBtn = document.querySelectorAll('.dropdown-item')

    linkBtn.forEach(linkBtn => {
    linkBtn.addEventListener("click", function() {
    jobListContainer.innerHTML = '';

    const filterTerm = linkBtn.textContent;
    jobPostings.forEach((job) => {
      if (job.JobType.includes(filterTerm) || job.Industry.includes(filterTerm) || job.Skills.includes(filterTerm) || job.Location.includes(filterTerm)) {
        const jobCard = document.createElement('div');
        jobCard.className = 'recent-job-card';
        jobCard.innerHTML = createJobCard(job);
        jobListContainer.appendChild(jobCard);
      }
    });
  });
});

});
