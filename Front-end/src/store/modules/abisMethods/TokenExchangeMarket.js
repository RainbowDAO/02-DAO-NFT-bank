
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('TokenExchangeMarket', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
bidToken ({rootState},{ from,id,bid,_types }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.bidToken(from,id,bid,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.bidToken(from,id,bid,_types).send({
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
init ({rootState},{ _agent,_token }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(_agent,_token).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(_agent,_token).send({
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
revocation ({rootState},{ id,_types }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.revocation(id,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.revocation(id,_types).send({
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
sellToken ({rootState},{ from,tokenId,sellPrice,_types }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.sellToken(from,tokenId,sellPrice,_types).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.sellToken(from,tokenId,sellPrice,_types).send({
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
list ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.list(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
listLength ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.listLength().call().then(res => {
						resolve(res)
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
	