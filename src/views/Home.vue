<template>
  <div class="page-wrapper">
    <div class="grid">
      <ul>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
        <li><ul><li>23일 (월)</li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></li>
      </ul>
    </div>
    <dashboard id="journal"  ref="journal" class="journal">
      <dash-layout
        v-for="layout in dlayouts"
        :key="layout.breakpoint"
        v-bind="layout"
        :debug="false"
        :col-width="rowWidth"
        :row-height="rowHeight"
        :compact="false"
        :use-css-transforms="true"
      >
        <dash-item
          v-for="item in layout.items"
          :key="item.id"
          v-bind.sync="item"
          :min-width="1"
          :max-width="1"
          :margin="{x: 10, y: 0}"
        >
          <div class="content" />

          <template v-slot:resizeBottomRight>
            <svg
              width="0"
              height="0"
              viewBox="0 0 10 10"
              focusable="false"
              role="img"
              alt="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#42b983"
              class="b-icon bi bi-arrow-down-right mx-auto"
              data-v-11c9e491
            >
              <g data-v-11c9e491>
                <path
                  fill-rule="evenodd"
                  d="M14 9.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9a.5.5 0 010-1h4.5V10a.5.5 0 01.5-.5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.646 5.646a.5.5 0 01.708 0l9 9a.5.5 0 01-.708.708l-9-9a.5.5 0 010-.708z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
          </template>
        </dash-item>
      </dash-layout>
    </dashboard>
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
      row: 14,
      dlayouts: []
    }
  },
  computed: {
    rowWidth () {
      return (window.innerWidth - 100) / this.row
    },
    rowHeight () {
      return (window.innerHeight - 100) / 25
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
            height: 1,
            draggable: false,
            resizable: false
          },
          {
            id: '3',
            x: 0,
            y: 1,
            width: 1,
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
            x: 5,
            y: 0,
            width: 1,
            height: 2
          },
          {
            id: '6',
            x: 6,
            y: 0,
            width: 1,
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
  position: relative;
  .grid {
    > ul {
      > li {
        display: inline-block;
        width: 6.85%;
        height: 100vh;
        //border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        > ul {
          li {
            display: inline-block;
            margin: 0;
            width: 100%;
            height: calc((100vh - 100px) / 25);
            text-align: center;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            &:first-child {
              //border: 0;
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
    left: 0;
    top: calc((100vh - 100px) / 25 + 10px);
  }
}
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #42b9833d;
}
</style>
