import {
    USER_SIGNIN,
    USER_SIGNOUT,
    POST_CREATE,
    POST_MODIFY,
    POST_DELETE,
} from './mutation-types.js'

export default {
    [USER_SIGNIN]({commit}, user) {
        commit(USER_SIGNIN,user)
    },
    [USER_SIGNOUT]({commit}) {
        commit(USER_SIGNOUT)
    },
    [POST_CREATE]({commit},post) {
        commit(POST_CREATE,post)
    },
    [POST_MODIFY]({commit},postId) {
        commit(POST_MODIFY)
    },
    [POST_DELETE]({commit},postId) {
        commit(POST_DELETE)
    },
}