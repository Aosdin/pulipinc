<template>
  <div class="page-wrapper">
    <div class="task-box">
      <div class="week">
        <v-btn icon class="ma-2" @click="weekGo('prev')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <span>2월 1일 ~ 2월 7일</span>
        <v-btn icon class="ma-2" @click="weekGo('next')">
          <v-icon>
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </div>
      <div ref="grid" class="grid">
        <ul>
          <li>
            <ul>
              <li>2월 1일(월)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 2일(화)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 3일(수)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 4일(목)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 5일(금)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 6일(토)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul>
              <li>2월 5일(일)</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li ref="row"></li>
            </ul>
          </li>
        </ul>
      </div>
      <dashboard id="journal" ref="journal" class="journal">
        <dash-layout
          v-for="layout in dlayouts"
          :key="layout.breakpoint"
          v-bind="layout"
          :debug="false"
          :number-of-cols="row"
          :col-width="rowWidth"
          :row-height="rowHeight"
          :max-row-height="rowHeight * 24"
          :compact="false"
          :margin="{ x: 0, y: 0 }"
          :use-css-transforms="false"
        >
          <dash-item
            v-for="itm in layout.items"
            :key="itm.id"
            v-bind.sync="itm"
            :min-width="1"
            :max-width="1"
            :max-height="24"
          >
            <div
              class="content"
              :style="{ 'background-color': itm.color + 'aa' }"
            >
              <v-icon v-if="itm.locked" small class="pr-15">mdi-lock</v-icon
              >{{ itm.project }}{{ '-' + itm.height + 'th' }}
              <div class="bottom">
                <v-icon class="info" @click="showInfo(itm)"
                  >mdi-dots-horizontal</v-icon
                >
              </div>
            </div>
          </dash-item>
        </dash-layout>
      </dashboard>
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ info.project }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump'
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
               취소
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              저장
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from 'vue-responsive-dash'

export default {
  components: {
    Dashboard,
    DashLayout,
    DashItem
  },
  data() {
    return {
      row: 7,
      dlayouts: [],
      dialog: false,
      info: {}
    }
  },
  computed: {
    rowWidth() {
      return this.$refs.row.clientWidth
    },
    rowHeight() {
      return 30
    }
  },
  methods: {
    weekGo(t) {
      console.log(t)
    },
    showInfo(d) {
      this.dialog = true
      this.info = d
      console.log(d)
    }
  },
  mounted() {
    this.dlayouts = [
      {
        breakpoint: 'xl',
        numberOfCols: this.row,
        items: [
          {
            id: '1',
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '2',
            x: 1,
            y: 0,
            width: 10,
            height: 1
          },
          {
            id: '3',
            x: 0,
            y: 1,
            width: 10,
            height: 1
          },
          {
            id: '4',
            x: 3,
            y: 0,
            width: 10,
            height: 2
          },
          {
            id: '5',
            x: 5,
            y: 0,
            width: 10,
            height: 2
          },
          {
            id: '6',
            x: 6,
            y: 0,
            width: 10,
            height: 1
          },
          {
            id: '7',
            x: 7,
            y: 1,
            width: 10,
            height: 1
          }
        ]
      },
      {
        breakpoint: 'lg',
        breakpointWidth: 1200,
        numberOfCols: this.row,
        items: [
          {
            id: '00',
            class: '',
            color: '#00897B',
            project: '용암수 운영',
            x: 0,
            y: 8,
            width: 1,
            height: 1
          },
          {
            id: '0',
            class: '',
            color: '#F44336',
            project: '전체회의',
            x: 0,
            y: 9,
            width: 1,
            height: 1,
            locked: true
          },
          {
            id: '1',
            class: '',
            color: '#00897B',
            project: '용암수 운영',
            x: 0,
            y: 10,
            width: 1,
            height: 8
          },
          {
            id: '2',
            class: '',
            color: '#FDD835',
            project: '타이틀리스트 슈어핏',
            x: 1,
            y: 8,
            width: 1,
            height: 3
          },
          {
            id: '3',
            class: '',
            color: '#3844c7',
            project: '연구소 주간회의',
            x: 1,
            y: 11,
            width: 1,
            height: 1,
            locked: true
          },
          {
            id: '4',
            class: '',
            color: '#FF7043',
            project: '타이틀리스트 어패럴',
            x: 1,
            y: 12,
            width: 1,
            height: 5.5
          },
          {
            id: '5',
            class: '',
            color: '#FF7043',
            project: 'SK 행복앱',
            x: 2,
            y: 8.5,
            width: 1,
            height: 8.5
          },
          {
            id: '6',
            class: '',
            color: '#3844c7',
            project: '행복앱 인수인계',
            x: 3,
            y: 9,
            width: 1,
            height: 3,
            locked: true
          },
          {
            id: '7',
            class: '',
            color: '#FF7043',
            project: 'SK 행복앱',
            x: 3,
            y: 12,
            width: 1,
            height: 8.5
          },
          {
            id: '8',
            class: '',
            color: '#FF7043',
            project: 'SK 행복앱',
            x: 4,
            y: 8,
            width: 1,
            height: 8
          }
        ]
      },
      {
        breakpoint: 'md',
        breakpointWidth: 996,
        numberOfCols: this.row,
        items: [
          {
            id: '1',
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '2',
            x: 1,
            y: 0,
            width: 2,
            height: 1
          },
          {
            id: '3',
            x: 0,
            y: 1,
            width: 2,
            height: 1
          },
          {
            id: '4',
            x: 3,
            y: 0,
            width: 2,
            height: 2
          },
          {
            id: '5',
            x: 5,
            y: 0,
            width: 1,
            height: 2
          },
          {
            id: '6',
            x: 6,
            y: 0,
            width: 2,
            height: 1
          },
          {
            id: '7',
            x: 7,
            y: 1,
            width: 1,
            height: 1
          }
        ]
      },
      {
        breakpoint: 'sm',
        breakpointWidth: 768,
        numberOfCols: 7,
        items: [
          {
            id: '1',
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '2',
            x: 1,
            y: 0,
            width: 2,
            height: 1
          },
          {
            id: '3',
            x: 0,
            y: 1,
            width: 2,
            height: 1
          },
          {
            id: '4',
            x: 3,
            y: 0,
            width: 1,
            height: 2
          },
          {
            id: '5',
            x: 2,
            y: 1,
            width: 1,
            height: 1
          }
        ]
      },
      {
        breakpoint: 'xs',
        breakpointWidth: 480,
        numberOfCols: 7,
        items: [
          {
            id: '1',
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '2',
            x: 1,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '3',
            x: 0,
            y: 1,
            width: 2,
            height: 1
          }
        ]
      },
      {
        breakpoint: 'xxs',
        breakpointWidth: 0,
        numberOfCols: 1,
        items: [
          {
            id: '1',
            x: 0,
            y: 0,
            width: 1,
            height: 1
          },
          {
            id: '2',
            x: 0,
            y: 1,
            width: 1,
            height: 1
          }
        ]
      }
    ]
    console.log(this.rowWidth)
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
  position: relative;
  .week {
    text-align: center;
    height: 30px;
    line-height: 30px;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .grid {
    > ul {
      clear: both;
      padding-left: 50px;
      > li {
        display: block;
        width: 14%;
        height: 100vh;
        float: left;
        &:first-child {
          > ul {
            > li {
              &:after {
                position: absolute;
                left: -45px;
                bottom: -8px;
                color: #ccc;
              }
              &:nth-child(1):after {
                content: '0:00';
              }
              &:nth-child(2):after {
                content: '1:00';
              }
              &:nth-child(3):after {
                content: '2:00';
              }
              &:nth-child(4):after {
                content: '3:00';
              }
              &:nth-child(5):after {
                content: '4:00';
              }
              &:nth-child(6):after {
                content: '5:00';
              }
              &:nth-child(7):after {
                content: '6:00';
              }
              &:nth-child(8):after {
                content: '7:00';
              }
              &:nth-child(9):after {
                content: '8:00';
              }
              &:nth-child(10):after {
                content: '9:00';
              }
              &:nth-child(11):after {
                content: '10:00';
              }
              &:nth-child(12):after {
                content: '11:00';
              }
              &:nth-child(13):after {
                content: '12:00';
              }
              &:nth-child(14):after {
                content: '13:00';
              }
              &:nth-child(15):after {
                content: '14:00';
              }
              &:nth-child(16):after {
                content: '15:00';
              }
              &:nth-child(17):after {
                content: '16:00';
              }
              &:nth-child(18):after {
                content: '17:00';
              }
              &:nth-child(19):after {
                content: '18:00';
              }
              &:nth-child(20):after {
                content: '19:00';
              }
              &:nth-child(21):after {
                content: '20:00';
              }
              &:nth-child(22):after {
                content: '21:00';
              }
              &:nth-child(23):after {
                content: '22:00';
              }
              &:nth-child(24):after {
                content: '23:00';
              }
              &:nth-child(25):after {
                content: '24:00';
              }
            }
          }
        }
        &:last-child {
          > ul {
            li {
              border-right: 0;
            }
          }
        }
        &:nth-child(6),
        &:nth-child(7) {
          ul {
            li {
              background-color: #cccccc55;
              &:first-child {
                background-color: #fff;
              }
            }
          }
        }
        //border-top: 1px solid #ccc;
        //border-bottom: 1px solid #ccc;
        > ul {
          > li {
            position: relative;
            display: block;
            margin: 0;
            width: 100%;
            height: 30px;
            text-align: center;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #eee;
            box-sizing: border-box;
            &:first-child {
              //border: 0;
              height: 50px;
              padding: 10px;
              border-right: 0;
            }
            &:last-child {
              //border-right: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
  .journal {
    position: absolute;
    width: 100%;
    left: 50px;
    top: 80px;
  }
}
.content {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 3px 10px;
  //border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #42b983aa;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  .bottom {
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
    overflow: hidden;
    clear: both;
    .info {
      float: right;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
