const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			urlBase:"https://playground.4geeks.com/contact"
		},
		actions: {
			getAllContacts: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/agendas/cristopher/contacts`)
					const data = await response.json()

					if (response.ok) {
						setStore({
							contacts: data.contacts

						})
					} else {
						const response = await fetch(`${getStore().urlBase}/agendas/cristopher`,
							{
								method: "POST",
							})
						console.log(response)
					}
				} catch (error) {
					console.log(error)
				}
			},
			addContact:async(data)=>{
				const actions = getActions()
				try {
					const response = await fetch(`${getStore().urlBase}/agendas/cristopher/contacts`,{
						method:"POST",
						body: JSON.stringify(data),
						headers:{
							"Content-Type":"application/json"
						}
						
					})
					console.log("respuesta",response)
					if(response.ok){
						actions().getAllContacts()
					}
				} catch (error) {
					console.log(error)
				}
			},

			deleteContact:async(id)=>{
				console.log(id)
				try {
					const response = await fetch (`${getStore().urlBase}/agendas/cristopher/contacts/${id}`,
						{
							method:"DELETE"
						}
					)
					if(response.ok){
						getActions().getAllContacts()
					}
					
				} catch (error) {
					console.log(error)
				}
			}



		}
	};
};

export default getState;
