import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}

	const dataList = reactive({});

	const dataAPI = async () => {
		try {
			const res = await axios.get('https://bible.fhl.net/json/qb.php');
			dataList.value = res.data;
		} catch (error) {
			console.log(error);
		}
	};

	return { count, doubleCount, increment, dataAPI, dataList };
});
