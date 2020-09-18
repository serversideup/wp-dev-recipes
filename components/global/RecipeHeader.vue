<template>
    <div class="rounded-md flex flex-col bg-blue-200 text-blue-700 dark:text-blue-100 dark:bg-blue-700 dark:bg-opacity-50  p-5">
        <div class="flex items-center" v-if="wordpressVersions.length > 0">
            <span class="font-bold">Wordpress Versions: </span>
            <span class="ml-2" v-text="wordpressVersions.join(', ')"></span>
        </div>
        <div class="flex items-center" v-if="Object.keys( tutorial ).length > 0">
            <span class="font-bold">Tutorial: </span>
            <a class="ml-2" :href="tutorial.link" target="_blank" v-text="tutorial.name"></a>
        </div>
        <div class="flex items-center" v-if="Object.keys( discussion ).length > 0">
            <a class="ml-2" :href="discussion.link" target="_blank">Discuss this recipe and ask questions</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wordpressVersions: {
            type: Array,
            default: []
        },
        tutorial: {
            type: Object,
            default: function(){
                return {}
            }
        },
        discussion: {
            type: Object,
            default: function(){
                return {}
            }
        }
    }
}
</script>
