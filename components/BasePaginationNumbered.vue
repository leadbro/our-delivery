<template>
  <ul class="base-pagination-numbered">
    <base-pagination-numbered-item
        v-if="_items"
        v-for="(item, index) in _items"
        :key="item.id"
        class="base-pagination-numbered__item"
        :is-current="item.isCurrent"
        :item-name="item.name"
        :speed="speed"
        @click.native="onItemClick(index)"
        @time-passed="onTimePassed"
    >
      {{item.name}}
    </base-pagination-numbered-item>
  </ul>
</template>

<script>
  import BasePaginationNumberedItem from '~/components/BasePaginationNumberedItem';

  export default {
    name: "BasePaginationNumbered",
    computed: {
      _items() {
        let items = [];

        if (this.count) {
          for (let i = 0; i < this.count; i++) {
            items.push({
              id: i,
              name: '0' + (i + 1),
              isCurrent: i === this.currentId
            });
          }
        }

        return items;
      },
    },
    methods: {
      setIndex(index) {
        this.$emit('set-index', index);
      },
      onTimePassed() {
        this.$emit('time-passed');
      },
      onItemClick(index) {
        this.setIndex(index)
      }
    },
    props: {
      currentId: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      },
      speed: {
        type: Number,
        default: 6000
      }
    },
    components: {
      BasePaginationNumberedItem
    },
    beforeCreated() {
      // this.currentId = 1;
      // this.currentId = 0;
    }
  }
</script>

<style lang="scss">
@import "../assets/mixins.scss";

.base-pagination-numbered {
  display: flex;
  padding: 0;
  margin: 0;
}

</style>
