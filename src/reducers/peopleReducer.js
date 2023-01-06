import { PEOPLE_ACTIONS } from "../Constants/peopleConstant";

const initialState = {
  isLoading: false,
   data: [],
   err: null,
};

export const PeopleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PEOPLE_ACTIONS.getPeopleDetailsStarted:
      return { ...state, isLoading: true , data: []};
    
    case PEOPLE_ACTIONS.getPeopleDetailsSuccess:
      return { ...state, isLoading: false, data: action.data, err: null };

    
    case PEOPLE_ACTIONS.getPeopleDetailsFailed:
      return { ...state, isLoading: false, err: action.err };
   
    default:
      return state;
  }
};
