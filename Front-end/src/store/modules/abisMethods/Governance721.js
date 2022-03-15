
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('Governance721', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	