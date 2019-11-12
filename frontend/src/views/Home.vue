<template>
    <v-container fluid>
      <v-navigation-drawer app width="50" dark>
        <div class="d-flex align-center justify-center">
          <v-btn to="/">
            <v-icon x-large>home</v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-sheet>
                <div class="display-3 font-weight-bold d-flex align-center justify-center">
                  Summareader
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center justify-center">
                <v-icon x-large>play_circle_outlined</v-icon>
                <v-icon x-large>pause_circle_outlined</v-icon>
              </div>
              <div class="d-flex align-center justify-center">
                <v-progress-linear rounded value="50" stream buffer-value="0">
                </v-progress-linear>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" v-for="d in data" :key="d">
              <v-card height="33vh">
                <v-card-title>{{d.title}}</v-card-title>
                <v-card-text>{{d.content}}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data: () => ({
    data : [
    ],
  }),
  beforeCreate: function () {
    let self = this
    axios.get("http://127.0.0.1:8000/api/")
    .then(function (res) {
      self.data = []
      for(let i of res.data) {
        self.data.push({
          title: i.fields.title,
          content: i.fields.content,
        })
      }
    })
      .catch(function (error) {
        alert(error)
      })
  },
};
</script>

<style scoped>
.detail-enter-active {
  animation : scaleUp 1s;
}
@keyframes scaleUp {
  0% {
    transfrom : scale(1);
  }
  50% {
    transfrom : scale(1.5);
  }
  100% {
    transfrom : scale(2);
  }
}
</style>