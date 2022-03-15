
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('RainbowBank', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	const actions = { 
allowTken ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.allowTken(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
bankName ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.bankName(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
depositToken ({rootState},{ to,month,value,name }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.depositToken(to,month,value,name).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.depositToken(to,month,value,name).send({
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
init ({rootState},{ token,_deposits }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.init(token,_deposits).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.init(token,_deposits).send({
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
setBankName ({rootState},{ bName }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.setBankName(bName).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.setBankName(bName).send({
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
token20 ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.token20().call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
withdrawa ({rootState},{ token,to,tokenId }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.withdrawa(token,to,tokenId).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.withdrawa(token,to,tokenId).send({
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
	