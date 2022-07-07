

export const initialState ={
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'hi man'
        },
        content:'첫번째 개스길',
        Image:[{
            src:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },{
            src:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },{
            src:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        }],
        Comments:[{
           User:{
            nickname:'nero'
           },
           content:'우와 개정판'
        },
        {
            User:{
                nickname:'hero'
            }
            ,content:'얼른사고싶다'
        }

        ]
    }],
    imagePaths:[],
    postAdded:false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type:ADD_POST,

}
const dummyPost = {
        id:2,
        content:'첫번째 rerere',
        User:{
            id:1,
            nickname:'zeoroco'
        },

        Image:[],
        Comments:[]
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true
            };
        default:
            return state;
    }

}

export default reducer;