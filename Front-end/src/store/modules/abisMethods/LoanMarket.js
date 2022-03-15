
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('LoanMarket', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
init ({rootState},{ _agent,_deposits,_token }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(_agent,_deposits,_token).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(_agent,_deposits,_token).send({
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
lend ({rootState},{ id,value }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.lend(id,value).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.lend(id,value).send({
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
mortgageMarket ({rootState},{ tokenId,amount,day,dayRate }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.mortgageMarket(tokenId,amount,day,dayRate).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.mortgageMarket(tokenId,amount,day,dayRate).send({
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
repayment ({rootState},{ id,day,value }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.repayment(id,day,value).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.repayment(id,day,value).send({
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
repealMortgage ({rootState},{ id }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.repealMortgage(id).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.repealMortgage(id).send({
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
lengthToken ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.lengthToken().call().then(res => {
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
manager ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.manager().call().then(res => {
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
	