<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer app width="50" dark>
      <div class="d-flex align-center justify-center">
        <v-btn to="/">
          <v-icon x-large>home</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="12">
            <v-sheet height="32vh" tile color="grey" class="d-flex align-center justify-center">
              <div class="display-3 font-weight-thin">
                Summareader
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2">
            <v-card height="62vh">
              <div v-for="(topic, i) in section" :key="i">
                <v-list class="pt-1 pb-1" disabled>
                  <v-list-item-group>
                    <v-list-item v-if="i == window" class="grey" align="end">
                      <v-list-item-content class="headline">
                        <v-list-item-title class="font-weight-bold">0{{i+1}}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-title>
                          {{topic.name}}
                          </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon>{{topic.icon}}</v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                    <v-list-item v-else>
                      <v-list-item-content class="headline">
                        <v-list-item-title class="font-weight-bold">0{{i+1}}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-title>
                          {{topic.name}}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-card>
          </v-col>
          <v-hover v-slot:default="{ hover }">
            <v-col cols="10">
              <v-window v-model="window" show-arrows>
                <v-window-item v-for="(topic, i) in section" :key="i">
                  <v-card height="62vh" to="home">
                    <v-img src="../assets/politic.png" class="fill-height">
                      <v-card-title>
                        {{topic.name}}
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-col>
          </v-hover>
        </v-row>
        <v-footer color="grey">
          <div class="flex-grow-1"></div>
          <div height="1vh">&copy; {{ new Date().getFullYear() }} - HUFS</div>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    section : [
      {name: "Politics", path: '@/assets/politic.png', icon: "emoji_people"},
      {name: "Economy", path: '@/assets/economy.png', icon: "account_balance"},
      {name: "Society", path: '@/assets/society.png', icon: "work"},
      {name: "Living/Culture", path: '@/assets/living.png', icon: "mood"},
      {name: "Global", path: '@/assets/global.png', icon: "public"},
      {name: "IT/Science", path: '@/assets/tec.png', icon: "devices"},
    ],
    window : 0,
  }),
  methods: {
  },
  created() {
    setInterval(() => {
      if (++this.window >= this.length) this.window = 0
    }, 5000)
  },
};
</script>