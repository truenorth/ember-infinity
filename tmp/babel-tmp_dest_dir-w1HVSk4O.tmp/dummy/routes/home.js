import Ember from "ember";
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model: function model() {
    return this.infinityModel("post");
  }
});