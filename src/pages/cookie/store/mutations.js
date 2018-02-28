/**
 * Created by mengqingshen on 2018/02/22.
 */

import * as types from './mutation-types'

export default {
  [types.SET_TITLE] (state, title) {
    state.title = title
  },
  [types.SET_AVATAR] (state, avatar) {
    state.avatar = avatar
  },
  [types.SYNC_CLEAR] (state) {
    state.map = []
  },
  [types.SYNC_ADD_CHEATER] (state, payload) {
    const { selectedUrl, cheater } = payload
    const origin = state.map.find((item) => item.url === selectedUrl)
    if (origin) {
      if (origin.cheaterList.find(({ origin }) => origin === cheater.origin)) return
      origin.cheaterList.push(cheater)
    }
  },
  [types.SET_URL] (state, payload) {
    state.url = payload.url
  },
  [types.SET_ROLE] (state, payload) {
    state.role = payload.role
  },
  [types.SET_MAP] (state, payload) {
    state.map = payload.map
  },
  [types.SYNC_ADD_ORIGIN] (state, payload) {
    if (state.map.find((item) => item.origin === payload.origin)) return
    state.map.push(payload)
  }
}