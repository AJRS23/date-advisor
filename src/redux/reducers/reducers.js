import Actions from '../actions/actions';
import data from '../../assets/data.json';

const INITIAL_STATE = {
  isLoggedIn: false,
  user:data.users[0],
  showPlaces:data.places,
  searchedPlaces: [],
  listPlaces: data.places,

  selectedIndexFilter: 0,
  listFilters: [
    {name: 'Show all',active: true}, {name:'Saved',active:false},
    {name:'Morning',active:false}, {name:'Night',active:false}, 
    {name:'Low-Price',active:false}, {name:'Medium-Price',active:false},
    {name:'High-Price',active:false}],
    
};


const PlaceReducer = (state = INITIAL_STATE, action) => {
  
  let placeIndex, newPlace, newFilter, newUser;
  switch (action.type) {

  case Actions.SET_LOGGED_IN:
    return Object.assign(
      {},
      state,
      {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        customer: action.payload.customer,
        user: action.payload.username
      }
    );

  case Actions.LOGIN:
    
    return Object.assign(
      {},
      state,
      {
        ...state,
        isLoggedIn: true,
        customer: action.payload.customer,
        user: action.payload.username
      }
    );

  case Actions.LOGOUT: 
    
    return Object.assign(
      {},
      state,
      {
        ...state,
        isLoggedIn: false,
        customer: '',
        user: ''
      }
    );

  case Actions.SET_BOOKS:
    return Object.assign(
      {},
      state,
      {
        ...state,
        books: [...action.books]
      }
    );

  case Actions.ADD_BOOK:
    return Object.assign(
      {},
      state,
      {
        ...state,
        books: [...state.books, action.book]
      }
    );
  case Actions.GET_SEARCH:
    newPlace = [];
    if(action.payload.city === undefined && action.payload.location ===''){
      newPlace = state.listPlaces;
    }
    else{
      state.listPlaces.forEach(p => {
      
        if(p.categories.find(cat => cat === action.payload.category) || p.location.city === action.payload.location || p.location.province === action.payload.location){
          newPlace.push(p);
        }
      });
    }
    
    return {
      ...state,
      searchedPlaces: newPlace,
      showPlaces: newPlace
    };

  case Actions.SET_FILTER:
    newPlace = [];
    newFilter = state.listFilters;

    if(action.index===0){
      newPlace = state.searchedPlaces;
    }
    else if(action.index===1){
      state.listPlaces.forEach(p => {
        if(state.user.likedPlaces.find(lik => lik === p.id)){
          newPlace.push(p);
        }
      });
    }
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

    newUser.likedPlaces.push(state.showPlaces[action.index].id);
    newPlace[action.index].likesCount++;
    
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
        //isLoggedIn: getTokenFromLocal() !== ''
      }
    );
  }
};

export default PlaceReducer;