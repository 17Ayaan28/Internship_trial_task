import React from 'react'

    const Repos = ({ repos }) => {
      return (
        <div>
          <center><h1>Repositories of the User</h1></center>
          
          {repos.map((repo) => (
            
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{repo.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{repo.private}</h6>
                <p class="card-text">{repo.description}</p>
              </div> 
            </div>
          ))}
        </div>
      )
    };

    export default Repos