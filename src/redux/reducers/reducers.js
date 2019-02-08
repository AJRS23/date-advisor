import Actions from '../actions/actions';
import data from '../../assets/data.json';

const userDefault={id: '',firstName: '',lastName: '',
  likedPlaces: [''],visitedPlaces: [''],
};

const INITIAL_STATE = {
  user: userDefault,

  showPlaces:data.places,
  searchedPlaces: [],

  listUsers: data.users,
  listPlaces: data.places,

  selectedIndexFilter: 0,
  listFilters: [
    {name: 'Show all',active: true}, {name:'Saved',active:false},
    {name:'Morning',active:false}, {name:'Night',active:false}, 
    {name:'Low-Price',active:false}, {name:'Medium-Price',active:false},
    {name:'High-Price',active:false}],
};


const PlaceReducer = (state = INITIAL_STATE, action) => {
  
  let newPlace, newFilter, newUser;
  switch (action.type) {

  case Actions.LOGIN:
    newUser = state.user;

    state.listUsers.forEach(u => {
      //Search for user
      if(u.username === action.payload.username && u.password === action.payload.password){
        newUser = u;
      }
    });
    return {
      ...state,
      user: newUser
    };

  case Actions.LOGOUT: 
    return {
      ...state,
      user: userDefault
    };

  case Actions.GET_SEARCH:
    newPlace = [];
    //No category nor location
    if(action.payload.city === undefined && action.payload.location ===''){
      newPlace = state.listPlaces;
    }
    else{
      state.listPlaces.forEach(p => {
        //Get places according to paramters
        if(p.categories.find(cat => cat === action.payload.category) && (p.location.city === action.payload.location || p.location.province === action.payload.location)){
          newPlace.push(p);
        }
      });
    }
    return {
      ...state,
      searchedPlaces: newPlace,
      showPlaces: newPlace,
      selectedIndexFilter: 0
    };

  case Actions.SET_FILTER:
    newPlace = [];
    newFilter = state.listFilters;
    //Show all places, get all places
    if(action.index===0){
      newPlace = state.searchedPlaces;
    }
    //Show saved places
    else if(action.index===1){
      state.listPlaces.forEach(p => {
        if(state.user.likedPlaces.find(lik => lik === p.id)){
          newPlace.push(p);
        }
      });
    }
    //Others filters
    else{
      state.searchedPlaces.forEach(p => {
        if(p.filters.find(cat => cat === state.listFilters[action.index].name)){
          newPlace.push(p);
        }
      });
    }
    newFilter[action.index].active = true;
    newFilter[state.selectedIndexFilter].active = false;
    return {
      ...state,
      showPlaces: newPlace,
      selectedIndexFilter: action.index,
      listFilters: newFilter
    };

  case Actions.SET_LIKE:
    newUser = state.user;
    newPlace = state.showPlaces;
    //Remove like from a place
    if(newUser.likedPlaces.find(lik => lik === state.showPlaces[action.index].id)){
      newUser.likedPlaces.splice(newUser.likedPlaces.indexOf(state.showPlaces[action.index].id),1);
      newPlace[action.index].likesCount--;
    }
    //Set like
    else{
      newUser.likedPlaces.push(state.showPlaces[action.index].id);
      newPlace[action.index].likesCount++;
    }
    return {
      ...state,
      user:newUser,
      showPlaces: newPlace
    };

  case Actions.SET_VISIT:
    newUser = state.user;
    newPlace = state.showPlaces;
    //Remove visit
    if(newUser.visitedPlaces.find(lik => lik === state.showPlaces[action.index].id)){
      newUser.visitedPlaces.splice(newUser.visitedPlaces.indexOf(state.showPlaces[action.index].id),1);
      newPlace[action.index].visitsCount--;
    }
    //Set visit
    else{

      newUser.visitedPlaces.push(state.showPlaces[action.index].id);
      newPlace[action.index].visitsCount++;
    }
    return {
      ...state,
      user:newUser,
      showPlaces: newPlace
    };

  default:
    return Object.assign(
      {},
      state,
      {
        ...state,
      }
    );
  }
};

export default PlaceReducer;