import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        blogPosts: [],
    }),
    actions: {
        async fetchBlogPosts() {
            const posts = [
                { id: 1, title: 'Post 1', description: 'Description 1', date: 'May 11' },
                { id: 2, title: 'Post 2', description: 'Description 2', date: 'May 12' },
                { id: 3, title: 'Post 3', description: 'Description 3', date: 'July 20' },
            ];
            this.blogPosts = posts;
        },
    },
});