import axiosInstance from "@/api/index";
import { Events, Event } from "@/api/routes";

const filterObject = (obj, search) => {
  let results = [];
  for (let i = 0; i < obj.length; i++) {
    for (let key in obj[i]) {
      if (
        obj[i][key]
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase()) != -1
      ) {
        results.push(obj[i]);
        break;
      }
    }
  }
  return results;
};

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export default {
  state: {
    events: [],
    event: [],
    word: "",
    eventsView: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setEvent(state, event) {
      state.event = event;
    },
    createEvent(state, newEvent) {
      state.events.push(newEvent);
    },
    editEvent() {},
    deleteEvent() {},
    updateWord(state, input) {
      state.word = input;
    },
    updateSearchResults(state, results) {
      state.eventsView = results;
    },
    sortBy(state, sortKey) {
      if (state.eventsView.length > 0) {
        state.eventsView.sort(dynamicSort(sortKey));
      } else {
        state.events.sort(dynamicSort(sortKey));
      }
    }
  },
  actions: {
    async fetchEvents({ commit }) {
      return axiosInstance
        .get(Events())
        .then(res => res.data)
        .then(events => {
          commit("setEvents", events);
        })
        .catch(err => console.log(err));
    },
    async fetchEvent({ commit }, id) {
      return axiosInstance
        .get(Event(id))
        .then(res => res.data)
        .then(event => {
          commit("setEvent", event);
        })
        .catch(err => console.log(err));
    },
    async postEvent({ commit }, event) {
      return new Promise((resolve, reject) => {
        axiosInstance.post(Events(), event).then(
          res => {
            commit("createEvent", { ...event });
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async putEvent({ commit }, { id, event }) {
      return new Promise((resolve, reject) => {
        axiosInstance.put(Event(id), event).then(
          res => {
            commit("editEvent");
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async deleteEvent({ commit }, id) {
      return new Promise((resolve, reject) => {
        axiosInstance.delete(Event(id)).then(
          res => {
            commit("deleteEvent");
            resolve(res.data.id);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    async updateSearchField({ state, commit, dispatch }, input) {
      await dispatch("updateEvents");
      commit("updateSearchResults", filterObject(state.events, input));
      commit("updateWord", input);
    },
    async updateEvents({ state, dispatch }) {
      if (Object.keys(state.events).length == 0) {
        await dispatch("fetchEvents");
      }
    },
    async clearSearch({ commit }) {
      commit("updateSearchResults", []);
    },
    async sortEvents({ commit }, { sortKey, sortDirection }) {
      if (sortDirection == "ASC") {
        commit("sortBy", sortKey);
      } else {
        commit("sortBy", "-" + sortKey);
      }
    }
  },
  getters: {
    events(state) {
      return state.events;
    },
    event(state) {
      return state.event;
    },
    eventCount(state) {
      return state.events.length;
    },
    word(state) {
      return state.word;
    },
    eventsView(state) {
      if (state.eventsView.length > 0) {
        return state.eventsView;
      } else {
        return state.events;
      }
    }
    // validEvent(state) {
    //   return state.events.filter((p) => {
    //     return p.title && p.description;
    //   });
    // },
  }
};
