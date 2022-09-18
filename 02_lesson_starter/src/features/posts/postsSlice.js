import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //function similar to a fc in a class
    // postAdded(state, action) {
    //why we are mutating the state here)
    //use immer js under hood, creating new state under the hook
    //state.push only available in createSlice
    // state.push(action.payload);
    // },

    //above is old way of writing, we can write
    //1, reducer and callback function together
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //maybe this is the function override thing
      //prepare call back, user at component can use dispatch(postAdded(title, content))
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    // action is an object of {postId: xxx, reaction: xxxx}
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        //increast that post reaction ++ (direclty mutate immer)
        existingPost.reactions[reaction]++;
      }
    },
  },
});

//*make a custom selector so that we can change in this file, easier to manage
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
