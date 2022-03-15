
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('RbtDeposit721', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
approve ({rootState},{ _to,_tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.approve(_to,_tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.approve(_to,_tokenId).send({
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
burn ({rootState},{ tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.burn(tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.burn(tokenId).send({
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
init ({rootState},{ _bank }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(_bank).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(_bank).send({
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
mint ({rootState},{ to,amounts,month,name_ }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.mint(to,amounts,month,name_).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.mint(to,amounts,month,name_).send({
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
safeTransferFrom ({rootState},{ from,to,tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeTransferFrom(from,to,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeTransferFrom(from,to,tokenId).send({
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
safeTransferFrom_ ({rootState},{ from,to,tokenId,_data }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.safeTransferFrom(from,to,tokenId,_data).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.safeTransferFrom(from,to,tokenId,_data).send({
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
setApprovalForAll ({rootState},{ operator,approved }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setApprovalForAll(operator,approved).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setApprovalForAll(operator,approved).send({
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
transfer ({rootState},{ _from,_to,_tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transfer(_from,_to,_tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transfer(_from,_to,_tokenId).send({
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
_exists ({rootState},{ tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods._exists(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
amount ({rootState},{ tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.amount(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
balanceOf ({rootState},{ _owner }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.balanceOf(_owner).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
expire ({rootState},{ tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.expire(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getApproved ({rootState},{ tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getApproved(tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
getTokenName ({rootState},{ _tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.getTokenName(_tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
isApprovedForAll ({rootState},{ owner,operator }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.isApprovedForAll(owner,operator).call().then(res => {
						resolve(res)
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
ownerOf ({rootState},{ _tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.ownerOf(_tokenId).call().then(res => {
						resolve(res)
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
tokenMetadata ({rootState},{ _tokenId }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenMetadata(_tokenId).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
tokenName ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenName(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
tokenOfOwnerByIndex ({rootState},{ owner,index }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenOfOwnerByIndex(owner,index).call().then(res => {
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
}
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	