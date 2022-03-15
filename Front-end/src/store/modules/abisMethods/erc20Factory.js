
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('erc20Factory', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
		const actions = { 
creatToken ({rootState},{ tokenName_,symbol_,decimals_,owner_,totalSupply_ }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.creatToken(tokenName_,symbol_,decimals_,owner_,totalSupply_).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.creatToken(tokenName_,symbol_,decimals_,owner_,totalSupply_).send({
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
newToken ({rootState}  ){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.newToken().call().then(res => {
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
tokenAddress ({rootState},{ param0 }){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.tokenAddress(param0).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},
transferfrom ({rootState},{ sender,recipient,amount }){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.transferfrom(sender,recipient,amount).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.transferfrom(sender,recipient,amount).send({
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
	