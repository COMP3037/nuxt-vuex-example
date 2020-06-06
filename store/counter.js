export const state = () => ({
    counter: 0,
    usuarios: []
})

export const mutations = {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    initlist(state, list) {
      state.usuarios.add(list);
    }
}

export const actions = {
  increment (context) {
    list = service.fetch();
    context.commit('increment', list)
  },
  decrement (context) {
    context.commit('decrement')
  }
}