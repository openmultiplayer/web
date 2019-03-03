<template>
  <div>
    <div v-for="category in Object.keys(tree)">
      <h3>{{ category }}</h3>
      <div v-for="page in tree[category]">
        <a :href="page.path">{{ page.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tree() {
      let pages = this.$site.pages
        .filter((value, index, array) => {
          return value.path !== "/";
        })
        .filter((value, index, array) => {
          return value.path.split("/").length > 3;
        })
        .map((value, index, array) => {
          let split = value.path.split("/");
          value.cat = split[1];
          value.sub = split[2];
          return value;
        });

      let tree = {};
      pages.forEach(page => {
        if (page.cat in tree) {
          tree[page.cat].push(page);
        } else {
          tree[page.cat] = [page];
        }
      });

      return tree;
    }
  }
};
</script>
