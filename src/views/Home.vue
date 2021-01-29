<template>
  <div class="page-wrapper">
    <dashboard id="timeDefer">
      <dash-layout
        v-for="layout in dlayouts"
        :key="layout.breakpoint"
        v-bind="layout"
        :debug="true"
        :col-width="50"
        :row-height="50"
        :compact="false"
        :use-css-transforms="true"
      >
        <dash-item
          v-for="item in layout.items"
          :key="item.id"
          v-bind.sync="item"
          :min-width="1"
          :max-width="1"
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
      dlayouts: [
        {
          breakpoint: 'xl',
          numberOfCols: 20,
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
          numberOfCols: 20,
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
          numberOfCols: 8,
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
          numberOfCols: 4,
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
          numberOfCols: 2,
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
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #42b9833d;
}
</style>
