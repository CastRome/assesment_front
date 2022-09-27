export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_ERROR = 'POSTS_ERROR';

const initialState = { posts: [],
  loading: true,
  error: null };

const postsReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state,
        loading: action.payload };
    case POSTS_ERROR:
      return { ...state,
        error: action.payload };
    case POSTS_SUCCESS:
      return { ...state,
        posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
