
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('IERC20', rootState.app.web3)
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
	