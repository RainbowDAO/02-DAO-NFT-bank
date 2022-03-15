
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('LoanMarketOrchestrator', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
agent ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.agent().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
detonate ({rootState}  ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.detonate().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.detonate().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
init ({rootState},{ user,_token,_deposit }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(user,_token,_deposit).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(user,_token,_deposit).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
loanMarket ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.loanMarket().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
owner ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.owner().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
renounceOwnership ({rootState}  ){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.renounceOwnership().estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.renounceOwnership().send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
transferOwnership ({rootState},{ newOwner }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferOwnership(newOwner).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferOwnership(newOwner).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                             
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	