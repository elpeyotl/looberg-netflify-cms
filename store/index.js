export const state = () => ({
    sideBarOpen: false,
    blogPosts: [],
    pages: []
});

export const mutations = {
    toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen;
    },
    setBlogPosts(state, list) {
    state.blogPosts = list;
    },
    setPages(state, list) {
    state.pages = list;
    }
};

export const actions = {
         toggleSidebar({ commit }) {
           commit("toggleSideBar");
         },
         async nuxtServerInit({ commit }) {
           // Get Blog posts
           let blogFiles = await require.context(
             "~/assets/content/blog/",
             false,
             /\.json$/
           );
           let blogPosts = blogFiles.keys().map(key => {
             let res = blogFiles(key);
             res.slug = key.slice(2, -5);
             return res;
           });
           console.log(blogPosts)
           await commit("setBlogPosts", blogPosts);

           //Get all Pages
           let pageFiles = await require.context(
             "~/assets/content/pages/",
             false,
             /\.json$/
           );
           let pages = pageFiles.keys().map(key => {
             let res = pageFiles(key);
             res.slug = key.slice(2, -5);
             return res;
           });
           console.log(pages)
           await commit("setPages", pages);
         }
       };

export const getters = {
    retrievePage: state => slug => {
    return state.pages.find(page => page.slug === slug);
    }
};
