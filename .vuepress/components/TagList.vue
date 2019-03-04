<template lang="html">
  <div>
    <div v-if="$route.hash === ''">
      <ul>
        <li  v-for="tag in Object.keys(tags)">
          <router-link :to="{path: `/tags.html#${tag}`}">
            {{tag}}
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="$route.hash !== ''">
      <a href="#">Show All</a>
      <span v-for="tag in Object.keys(tags)">
        <h2 :id="tag">
          <router-link
            :to="{ path: `/tags.html#${tag}`}"
            class="header-anchor"
            aria-hidden="true">#</router-link>
          {{tag}}
        </h2>
        <ul>
          <li v-for="page in tags[tag]">
            <router-link :to="{path: page.path}">{{page.title}}</router-link>
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          const hash = this.$route.hash.replace("#", "");
          if (hash !== "" && tag !== hash) {
            continue;
          }
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags;
    }
  }
};
</script>
