
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('creatTokenExchange', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	 const actions = { 
Etime ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.Etime().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
Stime ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.Stime().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
_RBT_SEED ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods._RBT_SEED().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
_Rbt ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods._Rbt().call().then(res => {
						resolve(res)
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
allReceived ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.allReceived().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
digOutAmount ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.digOutAmount().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
exchange ({rootState},{ value }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.exchange(value).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.exchange(value).send({
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
exchangeRate ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.exchangeRate().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
introduction ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.introduction().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
lockTime ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.lockTime().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
lockUpTotal ({rootState},{ param0,param1 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.lockUpTotal(param0,param1).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
logo ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.logo().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
poolName ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.poolName().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
setBaseInfo ({rootState},{ pname,logoUrl,_introduction,tokenAddr,_Stime,_Etime }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setBaseInfo(pname,logoUrl,_introduction,tokenAddr,_Stime,_Etime).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setBaseInfo(pname,logoUrl,_introduction,tokenAddr,_Stime,_Etime).send({
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
setExchangeRate ({rootState},{ rate }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setExchangeRate(rate).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setExchangeRate(rate).send({
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
setLockTime ({rootState},{ _lockTime }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setLockTime(_lockTime).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setLockTime(_lockTime).send({
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
	