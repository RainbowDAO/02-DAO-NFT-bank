
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('RBT', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
addFreeUser ({rootState},{ userAddress }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.addFreeUser(userAddress).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.addFreeUser(userAddress).send({
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
admin ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.admin().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
allowance ({rootState},{ owner,spender }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.allowance(owner,spender).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
approve ({rootState},{ spender,amount }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.approve(spender,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.approve(spender,amount).send({
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
balanceOf ({rootState},{ account }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.balanceOf(account).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
burn ({rootState},{ account,amount }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.burn(account,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.burn(account,amount).send({
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
changeFeeTo ({rootState},{ guager }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.changeFeeTo(guager).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.changeFeeTo(guager).send({
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
changeOwner ({rootState},{ manager }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.changeOwner(manager).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.changeOwner(manager).send({
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
checkpoints ({rootState},{ param0,param1 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.checkpoints(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
decimals ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.decimals().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
decreaseAllowance ({rootState},{ spender,subtractedValue }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.decreaseAllowance(spender,subtractedValue).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.decreaseAllowance(spender,subtractedValue).send({
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
fee ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.fee().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
feeto ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.feeto().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
freeUsers ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.freeUsers(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getCurrentVotes ({rootState},{ account }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getCurrentVotes(account).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getPriorVotes ({rootState},{ account,blockNumber }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getPriorVotes(account,blockNumber).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
increaseAllowance ({rootState},{ spender,addedValue }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.increaseAllowance(spender,addedValue).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.increaseAllowance(spender,addedValue).send({
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
modifyFee ({rootState},{ value }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.modifyFee(value).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.modifyFee(value).send({
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
name ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.name().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
numCheckpoints ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.numCheckpoints(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
removeFreeUser ({rootState},{ userAddress }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.removeFreeUser(userAddress).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.removeFreeUser(userAddress).send({
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
symbol ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.symbol().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
totalSupply ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.totalSupply().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
transfer ({rootState},{ recipient,amount }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transfer(recipient,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transfer(recipient,amount).send({
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
transferFrom ({rootState},{ sender,recipient,amount }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferFrom(sender,recipient,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferFrom(sender,recipient,amount).send({
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
	