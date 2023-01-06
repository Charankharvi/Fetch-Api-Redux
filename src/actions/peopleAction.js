import { PEOPLE_ACTIONS } from "../Constants/peopleConstant";

export const getPeopleDetailsStarted = () => {
    return {
      type: PEOPLE_ACTIONS.getPeopleDetailsStarted,
    };
  };
  
 
  
  export const getPeopleDetailsSuccess = (data) => {
    return {
      type: PEOPLE_ACTIONS.getPeopleDetailsSuccess,
      data,
    };
  };
  
  export const getPeopleDetailsFailed = (err) => {
    return {
      type: PEOPLE_ACTIONS.getPeopleDetailsFailed,
      err,
    };
  };



  export const getPeopleDetails =(params)=> async(dispatch) => {
    try {
      const response = await fetch('https://api.github.com/users',params);
      const users = await response.json();
      dispatch(getPeopleDetailsSuccess(users));
    } catch (error) {
      dispatch(getPeopleDetailsFailed(error));
    }
  };


  