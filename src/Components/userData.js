import React from 'react'

const Userdata = ({people}) => {

console.log("peopledata",people)


    return (
      
            <div className="container">
               
                {people.map((curElem,index) => {
                        return (

                            <div className="card_item" >
                                <div className="card_inner">
                                    <div>
                                        
                                    <img src={curElem.avatar_url} alt="" />
                                   
                                    </div>
                                    <div className="userName">{curElem.login}</div>
                                    <div className="userUrl">{curElem.url}</div>
                                   
                                    <button className="seeMore">Chat</button>
                                    <button className="seeMore">Meet</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default Userdata;

