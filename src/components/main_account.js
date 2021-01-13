import React from 'react'

    const Main_account = ({ main_account }) => {
      return (
        <div>

          {main_account.map((account) => (
            
            <div>
                {console.log("hihihiih")}
                <img src={account.avatar_url} width="200" height="200"/>

            </div>    
          ))}
        </div>
      )
    };

    export default Main_account