import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
	state: () => ({
		movies: null,
		showFullVideos: false,
	}),
})
